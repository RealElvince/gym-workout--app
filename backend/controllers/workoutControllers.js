const Workout = require('../models/workoutModel')
const mongoose =require('mongoose')

// GET all workouts
const getallWorkouts = async(req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt:-1})

    res.status(200).json(workouts)
}

// GET a single workout

const getsingleWorkout = async(req,res)=>{
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error:"No such workout"})
    }
    res.status(200).json(workout)
}

// POST a workout
const createWorkout = async(req,res)=>{
    const {title,workout_repetion,workout_load} = req.body

    // error handling
    let emptyFields = [];

    if(!title){
        emptyFields.push(title)
    }
    if(!workout_repetion){
        emptyFields.push(workout_repetion)
    }
    if(!workout_load){ 
        emptyFields.push(workout_load)
    }

    if(emptyFields.length > 0){
        return res.status(404).json({error:"Please fill in all the details!",emptyFields})
    }

    // add doc to the db
    try{
        const workout = await Workout.create({title,workout_repetion,workout_load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({erorr:error.message})
    }
}

// DELETE a workout
const deleteWorkout = async(req,res) =>{
    const { id } =req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        res.status(404).json({error:"No such workout!"})
    }
    res.status(200).json(workout)
}
// UPDATE a workout
 const updateWorkout = async(req,res) =>{
    const { id } = params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout!"})
    }

    const workout = await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
     if(!workout){
        res.status(404).json({error:"No such workout!"})
    }
    res.status(200).json(workout)
 }
module.exports ={
    createWorkout,
    getallWorkouts,
    getsingleWorkout,
    deleteWorkout,
    updateWorkout
}