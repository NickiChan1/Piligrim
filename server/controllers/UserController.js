const {Users} = require('../models/models');
const AppError = require('../error/AppError');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateJwt = (id, email) => {
    return jwt.sign(
        {id,email},
        process.env.SECRET_KEY,
        {expiresIn: '1h'}
    );
}


class UserController {
    async createUser(req,res, next){
        const {email, password} = req.body;
        if (!email || !password) {
            return next(AppError.badRequest('Не корректные данные'));
        }
        const userCheck = await Users.findOne({
            where: {email},
        });
        if (userCheck) {
            return next(AppError.badRequest('Такой пользователь уже есть'));
        }
        const hashPassword = await bcrypt.hash(password, 7);
        const user = await Users.create({
            email,
            password:hashPassword
        });
        const token = generateJwt(user.id, user.email);

        res.json({token});
    }

    async loginUser(req,res, next){
        const {email, password} = req.body;
        const loginUser = await Users.findOne({
            where:{email},
        });
        if(!loginUser){
            return next(AppError.internal("Пользователь не найден"));
        }
        let comparePassword = bcrypt.compareSync(password, loginUser.password);
            if(!comparePassword){
                return  next(AppError.internal("Пароль не верен"));
            }
        const token = generateJwt(loginUser.id, loginUser.email);
        res.json({token});
    }

    async allUser(req,res){
        const getallUser = await Users.findAll();
        res.json(getallUser);
    }

    async oneUser(req,res){
        const {id} = req.params;
        const getOneUser = await Users.findOne({
            where: {id}
        });
        res.json(getOneUser);
    }

    async updateUser(req,res){
        const {id} = req.params;
        const {email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 7);
        const updateOneUser = await Users.update(
            {email, password:hashPassword}, 
            {where: {id}});
        res.json(updateOneUser);
    }

    async deleteUser(req,res){
        const {id} =req.params;
        const deleteOneUser = await Users.destroy({
            where: {id}
        });
    }
}

module.exports = new UserController();