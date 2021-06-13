const {News} = require('../models/models');
const uuid = require('uuid');
const path = require('path');

class NewsController {
    async newNews(req,res){
        const {news_name, news_content,news_data} = req.body;
        const {news_image} = req.files;
        const fileName = uuid.v4() + '.jpg';
        news_image.mv(path.resolve(__dirname, '..', 'static/img', fileName));
        console.log(req.body);
        const newnews = News.create({
            news_name,
            news_content,
            news_image:fileName,
            news_data
            }
        );
       res.json(newnews);
    }

    async allNews(req,res){
        const allnews = await News.findAll({order: [
                ['news_data', 'DESC'],
            ],});
        res.json(allnews);
    }

    async oneNews(req,res){
        const {id} = req.params;
        const oneNews = await News.findOne({
            where: {id}
        });
        res.json(oneNews);
    }

    async updateNews(req,res){
        const {id} = req.params;
        const {news_name, news_content,news_data} = req.body;
        const {news_image} =req.files;
        const fileName = uuid.v4() + '.jpg';
        news_image.mv(path.resolve(__dirname, '..', 'static/img', fileName));
        const updateOneNews = await News.update(
            {news_name,news_content,news_data,news_image},
            {where: {id}
        });
        res.json(updateOneNews);
    }

    async deleteNews(req,res){
        const {id} = req.params;
        const deleteOneNews = await News.destroy({
            where: {id}
        });
        res.json(deleteOneNews);
    }

    async deleteAllNews(req,res){
        const deleteAllNews = await News.destroy({truncate:true, cascade:false});
        res.json(deleteAllNews);
    }
}

module.exports = new NewsController();