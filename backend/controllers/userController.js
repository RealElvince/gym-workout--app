const mongoose = require('mongoose');
const usersModel = require('../models/usersModel');


// login user
const loginUser = async(req,res) =>{
    res.json({mssg:"login user!"})
}

// sign up a user
const signupUser = async(req,res) =>{
    res.json({mssg:" sign up user!"})
}

module.exports ={
    loginUser,
    signupUser
}