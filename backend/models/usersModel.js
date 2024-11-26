const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },

    password:{
        type:String,
        require:true
    }

})

// static signup method

userSchema.statics.signup =async function (email,password){

    // validator email and password(strong)

    if(!email || !password){
        throw Error("All fields must be filled!")
    }

    if(!validator.isEmail(email)){
        throw Error('Email is not valid.')
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough!")
    }

    // email exists
    const exists = await this.findOne({email})
    if(exists){
        throw Error("Email already in use!")
    }

    // create salt
    const salt = await bcrypt.genSalt(10)
    // create hash
    const hash = await bcrypt.hash(password,salt)
    
    // create user with email and password

    const user = await this.create({email,password:hash})

    return user
}


module.exports =mongoose.model('UserModel',userSchema)