import { WorkoutsContext } from '../contexts/WorkoutContext';

import { useContext } from "react";

export const useWorkoutContext = () =>{
    const context = useContext(WorkoutsContext)
    
    if (!context){
        throw Error('useWorkoutContext must used inside a WorkoutContextPorvider.');
        
    }

    return context
}