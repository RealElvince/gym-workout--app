const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workkoutSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    workout_load:{ 
        type:Number,
        require:true
    },
    workout_repetion:{
        type:Number,
        require:true
    },
    
},{timestamps:true})

// create model
module.exports =mongoose.model('Workout',workkoutSchema)

