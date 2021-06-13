const {Photo} = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
const ADDRESS = 'http://' + HOST + ':' + PORT;


class PhotoController {
    async newPhoto(req,res){
        const {img} = req.files;
        const fileName = uuid.v4() + '.jpg';
        const {photo_text} = req.body;
        img.mv(path.resolve(__dirname, '..', 'static/img', fileName));
        const newOnePhoto = await Photo.create({
            img:fileName,
            photo_text,
        });
        res.json(newOnePhoto);
    }

    async allPhoto(req,res){
        const getAllPhoto = await Photo.findAll();
        res.json(getAllPhoto);
    }

    async onePhoto(req,res){
        const {id} = req.params;
        const getOnePhoto = await Photo.findOne({
            where: {id}
        });
        res.json(getOnePhoto);
    }

    async deletePhoto(req,res){
        const {id} = req.params;
        const deleteOnePhoto = await Photo.destroy({
            where: {id}
        });
        res.json(deleteOnePhoto);
    }

    async deleteAllPhoto(req,res){
        const deleteAllPhoto = await Photo.destroy({truncate:true, cascade:true});
        res.json(deleteAllPhoto);
    }
}

module.exports = new PhotoController();