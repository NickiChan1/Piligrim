const Router = require('express');
const router = new Router();
const AdminController = require('../controllers/AdminController');

    router.post('/admin', AdminController.newAdmin);
    router.get('/admin', AdminController.allAdmin);
    router.get('/admin', AdminController.oneAdmin);
    router.put('/admin', AdminController.updateAdmin);
    router.delete('/admin', AdminController.deleteAdmin);

module.exports = router;