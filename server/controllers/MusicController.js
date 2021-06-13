const {Music} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class MusicController {
    async newMusic(req,res){
        const {music_name} = req.files;
        const {music_content , music_direction} =req.body;
        const fileName  = uuid.v4() + '.mp3';
        music_name.mv(path.resolve(__dirname, '..', 'static/music', fileName));
        const newOneMusic = await Music.create({
            music_name:fileName,
            music_content,
            music_direction
        });
        res.json(newOneMusic);
    }

    async allMusic(req,res){
        const GetAllMusic = await Music.findAll();
        res.json(GetAllMusic);
    }

    async oneMusic(req,res){
        const {id} = req.params;
        const GetOneMusic = await Music.findOne({
            where: {id}
        });
        res.json(GetOneMusic);
    }

    async deleteMusic(req,res){
        const {id} = req.params;
        const deletOneMusic = await Music.destroy({where: {id}});
        res.json(deletOneMusic);
    }
}

module.exports = new MusicController();