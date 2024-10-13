// src/App.js
import React, { useState, useEffect } from "react";
import "./WorkOutInput.css";
import Select from "react-select";
import { useAuth } from "../../AuthContext";
import { useLevel } from "../../LevelContext";

const muscleGroups = [
  {
    name: "Rectus Abdominis",
    image: "body_parts_model/abs_full.png",
    offsetX: -400,
    offsetY: -520,
    opacity: 0.1,
  },
  {
    name: "Biceps Brachii",
    image: "body_parts_model/bicep.png",
    offsetX: -400,
    offsetY: -605,
    opacity: 0.1,
  },
  {
    name: "Tibialis Anterior",
    image: "body_parts_model/calves_front.png",
    offsetX: -375,
    offsetY: 300,
    opacity: 0.1,
  },
  {
    name: "Pectoralis Major",
    image: "body_parts_model/chest.png",
    offsetX: -400,
    offsetY: -600,
    opacity: 0.1,
  },
  {
    name: "Anterior Forearms",
    image: "body_parts_model/forearms_front.png",
    offsetX: -100,
    offsetY: -450,
    rotation: 30,
    scale: 0.8,
  },
  {
    name: "Obliques",
    image: "body_parts_model/obliques.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Anterior Deltoid",
    image: "body_parts_model/shoulder_front.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Adductors",
    image: "body_parts_model/thigh_inner.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Vastus Medialis",
    image: "body_parts_model/thigh_lower.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Hip Flexor",
    image: "body_parts_model/thigh_outer.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Vastus Intermedius",
    image: "body_parts_model/thigh.png",
    offsetX: -400,
    offsetY: 500,
  },
  {
    name: "Lower Back",
    image: "body_parts_model/back_lower.png",
  },
  {
    name: "Calves",
    image: "body_parts_model/calves.png",
  },
  {
    name: "Posterior Forearms",
    image: "body_parts_model/forearms_back.png",
  },
  {
    name: "Gluteus Maximus",
    image: "body_parts_model/glutes.png",
  },
  {
    name: "Hamstring",
    image: "body_parts_model/hamstring.png",
  },
  {
    name: "Latisumis Dorsi",
    image: "body_parts_model/lats.png",
  },
  {
    name: "Neck",
    image: "body_parts_model/neck.png",
  },
  {
    name: "Posterior Deltoid",
    image: "body_parts_model/shoulder_back.png",
  },
  {
    name: "Trapezius",
    image: "body_parts_model/trapezius.png",
  },
  {
    name: "Triceps Brachii",
    image: "body_parts_model/triceps.png",
  },
];

const Workout = () => {
  const [workouts, setWorkouts] = useState([]);

  const { level = 0, setLevel, currentXP = 0, setCurrentXP, requiredXP = 100, setRequiredXP } = useLevel() || {};

  const { username, setUsername, password, setPassword, bicep, setBicep } =
    useAuth();

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundImage: `url(${state.data.image})`,
      backgroundSize: "20px 20px",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "10px center",
      paddingLeft: "40px",
      backgroundColor: state.isFocused ? "#494949" : "#323232",
      color: "white",
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#494949",
    }),
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#494949",
      color: "white",
      border: "1px solid #121212", // Custom border color
      width: "100%", // Full width by default
      maxWidth: "500px", // Maximum width for larger screens
      minWidth: "200px", // Minimum width for smaller screens
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
  };

  const options = muscleGroups.map((group) => ({
    value: group.name,
    label: group.name,
    image: group.image,
  }));

  useEffect(() => {
    const select = document.querySelector('select[name="muscleGroup"]');
    if (select) {
      const options = select.options;
      for (let i = 0; i < options.length; i++) {
        const option = options[i];
        const imagePath = option.getAttribute("data-image");
        if (imagePath) {
          option.style.backgroundImage = `url(${imagePath})`;
        }
      }
    }
  }, []);

  const addWorkout = (newWorkout) => {
    setWorkouts([...workouts, newWorkout]);
  };

  const [workoutData, setWorkoutData] = useState({
    exerciseName: "",
    muscleGroup: "",
    sets: 0,
    reps: 0,
    weight: 0,
  });
  const gainXP = (xp) => {
    let newXP = currentXP + xp;

    // Check if gained enough XP to level up
    if (newXP >= requiredXP) {
      levelUp(newXP);
    } else {
      setCurrentXP(newXP); // Just update XP if not leveling up
    }
  };

  // Function to handle leveling up
  const levelUp = (newXP) => {
    let leftoverXP = newXP - requiredXP; // XP left after leveling up
    setLevel(level + 1); // Increment level

    // Dynamically increase the required XP for the next level
    let newRequiredXP = Math.floor(requiredXP * 1.5); // Example formula to increase XP requirement

    setRequiredXP(newRequiredXP); // Update required XP for the next level
    setCurrentXP(leftoverXP);      // Carry over leftover XP
  };
  const handleChange = (e) => {
    setWorkoutData({
      ...workoutData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGainXP = (workoutData) => {
    gainXP(((workoutData['reps']) * (workoutData['sets']) * 10)); // Use gainXP function as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();



    const { exerciseName, muscleGroup, sets, reps, weight } = workoutData; // !!

    if (exerciseName === "" || muscleGroup === "") {
      alert("Please enter the exercise name and muscle group.");
      return;
    }
    if (sets < 0 || reps < 0 || weight < 0) {
      alert("Please enter only positive values for sets, reps, and weight.");
      return;
    }

    addWorkout(workoutData);

    if (muscleGroup === "Biceps Brachii" && bicep === "yellow") {
      setBicep("red");
    } else if (muscleGroup === "Biceps Brachii") {
      setBicep("yellow");
    }

    gainXP(sets * reps);
  };

  return (
    <div className="main-container">
      <div
        className="level-display"
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          borderRadius: "5px",
          fontSize: "18px",
          fontWeight: "bold",
          width: "200px",
        }}
      >
        <p>Level: {level}</p>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <progress
            value={currentXP}
            max={requiredXP}
            style={{ width: "100%", height: "20px" }}
          />
          <span>{currentXP}/{requiredXP}</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
        <div className="workout-form-section">
          <div className="instruction-container">
            <h1>Add Workout</h1>
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
                <Select
                  options={options}
                  styles={customStyles}
                  onChange={(selectedOption) =>
                    handleChange({
                      target: {
                        name: "muscleGroup",
                        value: selectedOption.value,
                      },
                    })
                  }
                  value={options.find(
                    (option) => option.value === workoutData.muscleGroup
                  )}
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

              <button className="submit-button" type="submit">
                Add Workout
              </button>
            </form>
          </div>
        </div>

        <div className="workout-list-container">
          <h2>Workout List</h2>
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                {workout.exerciseName} - {workout.muscleGroup} - {workout.sets}{" "}
                sets, {workout.reps} reps, {workout.weight} lbs
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Workout;
