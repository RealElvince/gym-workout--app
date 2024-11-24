import React, { useState } from 'react'
import {useWorkoutContext} from '../hooks/useWorkoutContext'

function WorkoutForm() {

    const {dispatch} = useWorkoutContext()
    const [title,setTitle] = useState('')
    const [workout_load,setWorkoutLoad] = useState('')
    const [workout_repetion,setWorkoutRepetition] = useState('')
    const [error,setError] =useState(null)
    const [emptyFields,setEmptyFields] = useState([])
    
    
    // handle submit function
    const handleSubmit = async(e) =>{
        e.preventDefault();

        const workout = {title,workout_load,workout_repetion} 
        const response = await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setTitle('')
            setWorkoutLoad('')
            setWorkoutRepetition('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added',json)
            dispatch({type:'CREATE_WORKOUT',payload:json})
        }

    }
  return (
     <form className='workout-form' onSubmit={handleSubmit}>
        <h3>Add a new workout</h3>
        <label>Exercise Title:</label>
        <input type="text" value={title} 
          onChange={(e)=>setTitle(e.target.value)} className={emptyFields.includes('title')? 'error':''}/>
        <label>Workout Load (in Kg):</label>
        <input type="number" value={workout_load} 
         onChange={(e)=>setWorkoutLoad(e.target.value)} className={emptyFields.includes('workout_load')? 'error':''}/>
        <label>Exercise Repetition:</label>
        <input type="number" value={workout_repetion} 
          onChange={(e)=>setWorkoutRepetition(e.target.value)}className={emptyFields.includes('workout_repetion')? 'error':''}/> 
        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}
     </form>
  )
}

export default WorkoutForm