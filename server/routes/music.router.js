const Router = require('express');
const router = new Router();
const MusicController = require('../controllers/MusicController');

    router.post('/add', MusicController.newMusic);
    router.get('/music', MusicController.allMusic);
    router.get('/music', MusicController.oneMusic);
    router.delete('/music', MusicController.deleteMusic);

module.exports = router;