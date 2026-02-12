const User = require("../models/user");
const bcrypt = require('bcryptjs');

const userLoginController = async(req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.findOne({email});

        if(!user){ return res.status(404).json("There is no such account in that email");}
        
        const isLogin = await bcrypt.compare(password,user.password);

        if(!isLogin){
            return res.status(401).json("Password incorrect");
        }

        return res.json({message:"Successfully Login",userData:user});
    } catch(error) {
        return res.status(500).json("Server Issue ",error);
    }
}


module.exports = {userLoginController};