const Router = require('express');
const router = new Router();
const ClubComposition = require('../controllers/CComposition');

    router.post('/add', ClubComposition.newComposition);
    router.get('/all', ClubComposition.allComposition);
    router.get('/one', ClubComposition.oneComposition);
    router.put('/update', ClubComposition.updateComposition);
    router.delete('/drop', ClubComposition.deleteComposition);
    router.delete('/drop', ClubComposition.deleteAllComposition);
module.exports = router;