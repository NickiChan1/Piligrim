const Router = require('express');
const router = new Router();
const newsRouter =  require('../routes/news.router');
const adminRouter = require('../routes/admin.router');
const cHistoryRouter = require('../routes/chistory.router');
const compositionRouter = require('../routes/composition.router');
const faqRouter = require('../routes/faq.router');
const motoRouter = require('../routes/moto.router');
const musicRouter = require('../routes/music.router');
const photoRouter = require('../routes/photo.router');
const videoRouter = require('../routes/video.router');
const userRouter = require('../routes/users.router');

router.use('/news', newsRouter);
router.use('/admin', adminRouter);
router.use('/history', cHistoryRouter);
router.use('/composition', compositionRouter);
router.use('/faq', faqRouter);
router.use('/moto', motoRouter);
router.use('/music', musicRouter);
router.use('/photo', photoRouter);
router.use('/video', videoRouter);
router.use('/user', userRouter);

module.exports = router;