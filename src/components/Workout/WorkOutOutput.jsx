import React, { useState } from "react";

const WorkoutOutput = (workoutProps) => {

    const initialWorkoutData = {
        id: 0,
        exerciseName: "",
        muscleGroup: "",
        sets: 0,
        reps: 0,
        weight: 0,
    }

    const [workoutData, setWorkoutData] = useState(initialWorkoutData);

    const [workouts, setWorkouts] = useState([])

    const deleteWorkout = (id) => {
        setWorkouts(workouts.filter((workout) => workout.id !== id));
    }

    const addWorkout = (e) => {
        e.preventDefault();
        const newWorkoutObject = {
            ...workoutData,
            id: workouts.length
        }
        setWorkouts([...workouts, newWorkoutObject]);
        setWorkoutData(initialWorkoutData);
    }

    const handleChange = (e) => {
        setWorkoutData({
            ...workoutData,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <div>
            {workouts.map((workout) => {
                <Workout props={workout}></Workout>
            })}
        </div>
    )
}

export default WorkoutOutput;