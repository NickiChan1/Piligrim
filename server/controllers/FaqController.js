const {Faq} = require('../models/models');

class FaqController {
    async newFaq(req,res){
        const {faq_text} = req.body;
        const newOneFaq = await Faq.create({
            faq_text
        });
        res.json(newOneFaq);
    }

    async getFaq(req,res){
        const getAllFaq = await Faq.findAll();
        res.json(getAllFaq);
    }
    async getoneFaq(req,res){
        const {id} = req.params
        const getoneFaq = await Faq.findOne({
            where: {id}
        });
        res.json(getoneFaq);
    }

    async updateFaqs(req,res){
        const {id} = req.params;
        const {faq_text} = req.body;
        const updateFaq = await Faq.update({faq_text}, {where:{id}});
        res.json(updateFaq);
    }

    async deleteFaqs(req,res){
        const {id} = req.params;
        const deleteFaq = await Faq.destroy({where: {id}});
        res.json(deleteFaq);
    }

    async deleteAllFaq(req,res){
        const deleteAllFaqs = await  Faq.destroy({truncate: true , cascade:false});
        res.json(deleteAllFaqs);
    }
}

module.exports = new FaqController();