const {ClubComposition} = require('../models/models');

class ClubCompositions {
    async newComposition(req,res){
       const {user_name} = req.body;
        const newHistory = await ClubComposition.create({
            user_name,
        });
        res.json(newHistory);
    }

    async allComposition(req,res){
        const getAllComposition = await ClubComposition.findAll();
        res.json(getAllComposition);
    }

    async oneComposition(req,res){
        const {id} = req.params;
        const getOneComposition = await ClubComposition.findOne({
            where: {id}
        });
        res.json(getOneComposition);
    }

    async updateComposition(req,res){
        const {id} = req.params;
        const getUpdateComposition = await ClubComposition.update({
            where: {id}
        });
        res.json(getUpdateComposition);
    }

    async deleteComposition(req,res){
        const {id} = req.params;
        const deleteOneComposition = await ClubComposition.destroy({
            where: {id}
        });
        res.json(deleteOneComposition);
    }

    async deleteAllComposition(req,res){
        const deleteAllComposition = await ClubComposition.destroy({truncate:true, cascade:false});
        res.json(deleteAllComposition);
    }
}

module.exports = new ClubCompositions();