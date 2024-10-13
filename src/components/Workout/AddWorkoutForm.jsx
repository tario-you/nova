import React, { useState } from "react";
import "./AddWorkoutForm.css"; // Create a CSS file for styling

const AddWorkoutForm = () => {
  const [workoutData, setWorkoutData] = useState({
    exerciseName: "",
    muscleGroup: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });

  const handleChange = (e) => {
    setWorkoutData({
      ...workoutData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { exerciseName, muscleGroup, sets, reps, weight } = workoutData;
    if (exerciseName === "" || muscleGroup === "") {
      alert("Please enter the exercise name and muscle group.");
      return;
    }
    if (sets < 0 || reps < 0 || weight < 0) {
      alert("Please enter only positive values for sets, reps, and weight.");
      return;
    }

    // ADD API CALL HERE
    console.log("Workout Data Submitted:", workoutData);
  };

  return (
    <div className="main-container">
      <div className="instruction-container">
        <h1>Add Workout</h1>
        <p> Input your workout details below. </p>
      </div>

      <div className="add-workout-form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Exercise Name:</label>
            <input
              type="text"
              name="exerciseName"
              value={workoutData.exerciseName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Muscle Group:</label>
            <input
              type="text"
              name="muscleGroup"
              value={workoutData.muscleGroup}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Sets:</label>
            <input
              type="number"
              name="sets"
              value={workoutData.sets}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reps:</label>
            <input
              type="number"
              name="reps"
              value={workoutData.reps}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Weight (in lbs):</label>
            <input
              type="number"
              name="weight"
              value={workoutData.weight}
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-button" type="submit">Add Workout</button>
        </form>
      </div>
    </div>
  );
};

export default AddWorkoutForm;
