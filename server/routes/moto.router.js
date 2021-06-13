const Router = require('express');
const router = new Router();
const MotoController = require('../controllers/MotoController');

    router.post('/moto', MotoController.newMoto);
    router.get('/moto', MotoController.allMoto);
    router.get('/moto', MotoController.oneMoto);
    router.put('/moto', MotoController.updateMoto);
    router.delete('/moto', MotoController.deleteMoto);
    router.delete('/deleteallmoto', MotoController.deleteAllMoto);

module.exports = router;