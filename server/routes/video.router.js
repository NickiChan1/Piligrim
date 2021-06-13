const Router = require('express');
const router = new Router();
const VideoController = require('../controllers/VideoController');

    router.post('/video', VideoController.newVideo);
    router.get('/video', VideoController.getVideo);
    router.get('/video', VideoController.getOneVideo);
    router.delete('/video', VideoController.deleteVideo);
    router.delete('/video', VideoController.deleteAllVideo);


module.exports = router;