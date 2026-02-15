const express = require('express');
const router = express.Router();
const  {getUser,createUser}  = require('../controllers/register');
const { updateUser,userDelete } = require('../controllers/editUserData');


router.get("/_id/:_id",getUser);

router.post("/",createUser);

router.put("/email/:email",updateUser);

router.delete("/_id/:_id",userDelete);


module.exports = router;                                                                                                            