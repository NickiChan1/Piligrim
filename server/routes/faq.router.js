const Router = require('express');
const router =  new Router();
const faqController = require('../controllers/FaqController');

    router.post('/newFaq', faqController.newFaq);
    router.get('/getFaq', faqController.getFaq);
    router.get('/getoneFaq/:id', faqController.getoneFaq);
    router.put('/updateFaq', faqController.updateFaqs);
    router.delete('/deleteFaq/:id', faqController.deleteFaqs);
    router.delete('/dropFaq', faqController.deleteAllFaq);


module.exports = router;