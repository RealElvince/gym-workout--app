require('dotenv').config()
const express =require('express')
const mongoose = require('mongoose')
const cors = require('cors')

// workouts routes
const workoutRoutes = require('./routes/workouts')

// users routes 

const userRoutes =require('./routes/users')
// express  app
const app = express()

// Middleware 
app.use(express.json())
app.use((req,res,next) =>{
    req.path,res.method
    next()
})

// Enable CORS for all origins
app.use(cors());
// use routes 
app.use('/api/workouts',workoutRoutes)
app.use('/api/users',userRoutes)


// Connect to database
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // list for requests
    app.listen(process.env.PORT,()=>{
      console.log('Listening to port 4000!', process.env.PORT)
    })
})
.catch((error)=>{
    console.log(error)
})
