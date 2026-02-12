const Register = require("../models/user");
const bcrypt = require('bcryptjs');


const getUser = async (req,res) => {
    const {_id} = req.params;
    try {
        const userData = await Register.findOne({_id:_id});
        if(!userData) return res.status(404).json("Not Found");
        return res.json(userData);
    } catch (error) {
        return res.status(500).json("server error "+error);
    }
}


const createUser = async (req,res) => {
    const {email,password,username} = req.body;
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const userCreated = await Register.create({email,password:hashedPassword,username});
        return res.json({message:"successfully registered",user:userCreated});
    } catch (error) {
        return res.json("Failed to register try again ! "+error);
    }
}


module.exports = {
    getUser,
    createUser
}