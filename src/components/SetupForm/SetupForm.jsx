import React, { useState } from "react";
import "./SetupForm.css"; // Create a CSS file for styling
import { useNavigate } from "react-router-dom";

const SetupForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    gender: "",
    weight: 0,
    bench: 0,
    squat: 0,
    clean: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { gender, weight, bench, squat, clean } = formData;
    if (gender === "") {
      alert("Please enter your gender.");
      return;
    }
    if (weight < 0 || bench < 0 || squat < 0 || clean < 0) {
      alert("Please enter only positive values for weight and max lifts.");
      return;
    }

    // ADD API CALL HERE
    navigate("/body-model");
  };

  return (

    <div className="main-container">
      <div className="modal-overlay">
        <div className="modal-content-setupform">
          <div className="instruction-container">
            <h1>Setup</h1>
          </div>

          <div className="setup-form-container">
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Weight (lbs)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Max Bench Press (lbs)</label>
                <input
                  type="number"
                  name="bench"
                  value={formData.bench}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Max Squat (lbs)</label>
                <input
                  type="number"
                  name="squat"
                  value={formData.squat}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Max Clean (lbs)</label>
                <input
                  type="number"
                  name="clean"
                  value={formData.clean}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="submit-button" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>

  );
};

export default SetupForm;
