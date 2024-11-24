const express = require('express')
const { createWorkout, getallWorkouts, getsingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutControllers')

const router =express.Router()


// GET all workouts
router.get('/',getallWorkouts)
 // GET a single workout
 router.get('/:id',getsingleWorkout)

 // POST a new workout
 router.post('/',createWorkout)

 // DELETE  a new workout

 router.delete('/:id',deleteWorkout)

 // UPDATE  a workout
  router.patch('/:id',updateWorkout)
module.exports =router