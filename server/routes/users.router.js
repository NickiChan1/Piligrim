const Router = require('express');
const router = new Router();
const UserController = require('../controllers/UserController');

    router.post('/registration', UserController.createUser);
    router.post('/login', UserController.loginUser);
    router.get('/user', UserController.allUser);
    router.get('/user:id', UserController.oneUser);
    router.put('/user:id', UserController.updateUser);
    router.delete('/user:id', UserController.deleteUser);

module.exports = router;