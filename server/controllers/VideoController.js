const {Video} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class VideoController {
    async newVideo(req,res){
        const {title, text} = req.body;
        const {img, video} = req.files;
        const fileName = uuid.v4() + '.jpg';
        img.mv(path.resolve(__dirname, '..', 'static/img', fileName));
        const videoName = uuid.v4() + '.mp4';
        video.mv(path.resolve(__dirname, '..', 'static/video', videoName));
        const newOneVideo = await Video.create({
            title,
            text,
            img:fileName,
            video:videoName
        });
        res.json(newOneVideo);
    }

    async getVideo(req,res){
        const getAllVideo = await Video.findAll();
        res.json(getAllVideo);
    }

    async getOneVideo(req,res){
        const {id} = req.params;
        const getOneVideo = await Video.findOne({
            where: {id}
        });
        res.json(getOneVideo);
    }

    async deleteVideo(req,res){
        const {id} = req.params;
        const deleteOneVideo = await Video.destroy({
            where: {id}
        });
        res.json(deleteOneVideo);
    }

    async deleteAllVideo(req,res){
        const deleteAllVideo = await Video.destroy({truncate:true, cascade:false});
        res.json(deleteAllVideo);
    }
}

module.exports = new VideoController();