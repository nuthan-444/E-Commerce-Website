const User = require("../models/user");
const bcrypt = require('bcryptjs');



const updateUser = async(req,res) => {
    const {email} = req.params;
    const {username,password} = req.body;
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        const updatingUserData = await User.findOneAndUpdate({email},{$set : {email,password:hashedPassword,username}},{new:true});
        console.log(updatingUserData)
        res.json({message:"updated your profile.",userChanged:updatingUserData});
    } catch (error) {
        res.status(500).json("Server Error "+error);
    }
}


const userDelete = async(req,res) => {
    const {email} = req.params;
    try {
        const isDeleted = await User.findOneAndDelete({email});
        if(isDeleted != null){
            res.json({message:"deleted successfully"})
        } else {
            res.json({message:"No such user."})
        }
    } catch (error){
        res.status(500).json("server error "+error);
    }
}

module.exports = {
    updateUser,
    userDelete
}