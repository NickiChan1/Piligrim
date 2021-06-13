const Router = require('express');
const router = new Router();
const ClubHistory = require('../controllers/CHistoryController');

    router.post('/add', ClubHistory.newHistory);
    router.get('/clubhistory', ClubHistory.getHistory);
    router.put('/update', ClubHistory.updateHistory);
    router.delete('/delete', ClubHistory.deleteHistory);
    router.delete('/destroyhistory', ClubHistory.deleteAllHistory);

module.exports = router;
