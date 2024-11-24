
import React ,{useEffect,useState} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import {useWorkoutContext} from '../hooks/useWorkoutContext'
function HomePage() {

  // const [workouts,setWorkouts] =useState('')
 // fetching data from the backend api

 const {workouts,dispatch} = useWorkoutContext()
  useEffect(()=>{
        const fetchWorkouts = async()=>{
           const response = await fetch('/api/workouts')
           const json = await response.json()

           if(response.ok){
             dispatch({type:'SET_WORKOUTS',payload:json})
           }
        }

        fetchWorkouts()
  },[dispatch])
  return (
    <div className="home-page">
      <div className='workouts'>
         {workouts && workouts.map(workout =>(
          <WorkoutDetails key={workout._id} workout={workout}/>
         ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default HomePage