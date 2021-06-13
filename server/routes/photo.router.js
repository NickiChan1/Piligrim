const Router = require('express');
const router = new Router();
const PhotoController = require('../controllers/PhotoController');

    router.post('/add', PhotoController.newPhoto);
    router.get('/getphoto', PhotoController.allPhoto);
    router.get('/onephoto', PhotoController.onePhoto);
    router.delete('/delphoto', PhotoController.deletePhoto);
    router.delete('/dropphoto', PhotoController.deleteAllPhoto);


module.exports = router;