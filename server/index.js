//Достаем пакет Express из node_modules
require('dotenv').config();
const express = require('express');
const sequelize = require('./database');
const router = require('./routes/index');
const models =  require('./models/models');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST;
const path = require('path');
const errorMiddleware = require('./middleware/ErrorMiddleware')
const fileUpload = require('express-fileupload');

app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'static')));
app.use(cors());
app.use('static/music',express.static(path.resolve(__dirname, 'static/music')));
app.use('/static/img',express.static(path.resolve(__dirname, 'static/img')));
app.use('static/video',express.static(path.resolve(__dirname, 'static/video')));
app.use(fileUpload({
    useTempFiles : true,
}));
app.use('/app', router);


//Последний Middleware - отвечающий за обработку ошибок
app.use(errorMiddleware);

const AppStart = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT,HOST, () => console.log(`server on port: ${PORT}`));
      } catch (e) {
        console.log(e);
      }
}

AppStart();
