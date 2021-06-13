const {MotoHistory} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class MotoController {
    async newMoto(req,res){
        const {moto_name, moto_content} = req.body;
        const {moto_img} = req.files;
        const fileName = uuid.v4() + '.jpg';
        moto_img.mv(path.resolve(__dirname, '..', 'static', fileName));
        const newOneMoto = await MotoHistory.create({
            moto_name,
            moto_content,
            moto_img:fileName
        });
        res.json(newOneMoto);
    }

    async allMoto(req,res){
        const getAllMoto = await MotoHistory.findAll();
        res.json(getAllMoto);
    }

    async oneMoto(req,res){
        const {id} = req.params;
        const getOneMoto = await  MotoHistory.findOne({
            where: {id}
        });
        res.json(getOneMoto);
    }

    async updateMoto(req,res){
        const {id} = req.params;
        const {moto_img} = req.files;
        const fileName = uuid.v4() + '.jpg';
        moto_img.mv(path.resolve(__dirname, '..', 'static/img', fileName));
        const {moto_name, moto_content} = req.body;
        const updateOneMoto = await MotoHistory.update({moto_name,
            moto_content,
            moto_img:fileName},
    {where: {id}});
        res.json(updateOneMoto);
    }

    async deleteMoto(req,res){
        const {id} = req.params;
        const deleteOneMoto = await MotoHistory.destroy({where: {id}});
        res.json(deleteOneMoto);
    }

    async deleteAllMoto(req,res){
        const deleteAllMoto = await MotoHistory.destroy({cascade:false, truncate:true});
        res.json(deleteAllMoto);
    }
}

module.exports = new MotoController(); 