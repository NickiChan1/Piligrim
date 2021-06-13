const {AdminUser} = require('../models/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

class AdminController {
    async newAdmin(req,res){
        const {password, email, role_name} = req.body;
        const hashPassword = await bcrypt.hash(password, 7);
        const newOneAdmin = await AdminUser.create({
            email,
            password:hashPassword,
            role_name
        });
        res.json(newOneAdmin);
    }

    async allAdmin(req,res){
        const getAllAdmin = await AdminUser.findAll();
        req.json(getAllAdmin);
    }

    async oneAdmin(req,res){
        const {id} = req.params;
        const getOneAdmin = await AdminUser.findOne({
            where: {id}
        });
        res.json(getOneAdmin);
    }

    async updateAdmin(req,res){
        const {id} = req.params;
        const {email, password} = req.body;
        const hashPassword = await bcrypt.hash(password, 7);
        const updateOneAdmin = await AdminUser.update(
            {email, password:hashPassword},
            {where: {id}}
            );
            res.json(updateOneAdmin);
    }

    async deleteAdmin(req,res){
        const {id} = req.params;
        const deleteOneAdmin = await AdminUser.destroy({
            where:{id}
        });
        res.json(deleteOneAdmin);
    }
}

module.exports = new AdminController();