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
        return res.json({message:"updated your profile.",userChanged:updatingUserData});
    } catch (error) {
        return res.status(500).json("Server Error "+error);
    }
}


const userDelete = async(req,res) => {
    const {_id} = req.params;


    try {
        const isDeleted = await User.findOneAndDelete({_id});
        if(isDeleted != null){
            return res.json({message:"deleted successfully"})
        } else {
            return res.json({message:"No such user."})
        }
    } catch (error){
        return res.status(500).json("server error "+error);
    }
}

module.exports = {
    updateUser,
    userDelete
}