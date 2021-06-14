const {ClubHistorys} = require('../models/models');

class ClubHistory {
    async newHistory(req,res){
        const {history_text} = req.body;
        console.log(req.body);
        const createHistory = await ClubHistorys.create({
            history_text
        });

        res.json(createHistory);
    }

    async getHistory(req,res){
        const getAllHistory = await ClubHistorys.findAll({

        });
        res.json(getAllHistory);
    }

    async updateHistory(req,res){
        const {id} = req.params;
        const {history_text} = req.body;
            const updateClubHistory = await ClubHistorys.update({history_text}, {where: {id}});
            res.json(updateClubHistory);
    }

    async deleteHistory(req,res){
        const {id} = req.params;
        const deleteClubHistory = await ClubHistorys.destroy({
            where:{id}
        });
        res.json(deleteClubHistory);
    }

    async deleteAllHistory(req,res){
        const deleteAllClubHistory = await ClubHistorys.destroy({truncate:true, cascade:false,});
        res.json(deleteAllClubHistory);
    }
}

module.exports = new ClubHistory();