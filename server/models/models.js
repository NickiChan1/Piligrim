const {DataTypes} = require('sequelize');
const sequelize = require('../database');

    const Role = sequelize.define('role', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        role_name: {type: DataTypes.STRING, allowNull:false},
    });

    const AdminUser = sequelize.define('admin_user' , {
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        email: {type:DataTypes.STRING,unique:true,allowNull:false},
        password: {type:DataTypes.STRING, allowNull:false},
        role_name: {type: DataTypes.STRING, allowNull:false},
    });

    const Users = sequelize.define('user', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        email: {type: DataTypes.STRING, unique:true, allowNull:false},
        password: {type: DataTypes.STRING, allowNull:false},
        role_name: {type: DataTypes.STRING, allowNull:false, defaultValue:'User'},
    });

    const MotoHistory = sequelize.define('moto_history', {
        id: {type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        moto_name: {type:DataTypes.STRING, allowNull:false},
        moto_content: {type:DataTypes.STRING, allowNull:false},
        moto_img: {type:DataTypes.STRING, allowNull:false},
    });

    const ClubHistorys = sequelize.define('club_history', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        history_text: {type: DataTypes.STRING(10000), allowNull:false}
    });

    const ClubComposition = sequelize.define('club_composition', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        user_name: {type: DataTypes.STRING, allowNull:false}
    });

    const Faq = sequelize.define('faq', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        faq_text: {type: DataTypes.STRING(10000), allowNull:false},
    });

    const News = sequelize.define('news', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        news_name: {type: DataTypes.STRING, allowNull:false},
        news_content: {type: DataTypes.STRING, allowNull:false},
        news_image: {type: DataTypes.STRING, allowNull:false},
        news_data: {type: DataTypes.STRING}
    });

    const Music = sequelize.define('music', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        music_name: {type: DataTypes.STRING},
        music_context: {type: DataTypes.STRING, allowNull:false},
        music_direction: {type: DataTypes.STRING, allowNull:false},
    });

    const Video = sequelize.define('video', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        title: {type: DataTypes.STRING, allowNull:false},
        text: {type: DataTypes.STRING, allowNull:false},
        img: {type: DataTypes.STRING, allowNull:false},
        video: {type: DataTypes.STRING}
    });

    const Photo = sequelize.define('photo', {
        id: {type: DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
        img: {type: DataTypes.STRING},
        photo_text: {type: DataTypes.STRING}
    });

    Role.hasMany(AdminUser);
    AdminUser.belongsTo(Role);

    Role.hasMany(Users);
    Users.belongsTo(Role);

    AdminUser.hasMany(ClubComposition);
    ClubComposition.belongsTo(AdminUser);

    AdminUser.hasMany(ClubHistorys);
    ClubHistorys.belongsTo(AdminUser);

    AdminUser.hasMany(MotoHistory);
    MotoHistory.belongsTo(AdminUser);

    AdminUser.hasMany(Music);
    Music.belongsTo(AdminUser);

    AdminUser.hasMany(Photo);
    Photo.belongsTo(AdminUser);

    AdminUser.hasMany(Video);
    Video.belongsTo(AdminUser);

    AdminUser.hasMany(News);
    News.belongsTo(AdminUser);

    AdminUser.hasMany(Faq);
    Faq.belongsTo(AdminUser);

    module.exports = {Role,
        AdminUser,
        Users,
        MotoHistory,
        ClubHistorys,
        ClubComposition,
        Faq,
        News,
        Music,
        Video,
        Photo
    };
   