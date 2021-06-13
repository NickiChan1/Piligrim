const Router = require('express');
const router = new Router();
const NewsController = require('../controllers/NewsController');

    router.post('/add', NewsController.newNews);
    router.get('/all', NewsController.allNews);
    router.get('/:id', NewsController.oneNews);
    router.put('/', NewsController.updateNews);
    router.delete('/deleteNew/:id', NewsController.deleteNews);
    router.delete('/destroy', NewsController.deleteAllNews);

module.exports = router;