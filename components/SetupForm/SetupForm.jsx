import React, { useState } from "react";
import "./SetupForm.module.css"; // Create a CSS file for styling

const SetupForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    weight: "",
    bench: "",
    squat: "",
    clean: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // ADD API CALL HERE
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form className="setup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Gender:</label>
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label>Weight (in lbs):</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Max Bench Press (in lbs):</label>
        <input
          type="number"
          name="bench"
          value={formData.bench}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Max Squat (in lbs):</label>
        <input
          type="number"
          name="squat"
          value={formData.squat}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Max Clean (in lbs):</label>
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
  );
};

export default SetupForm;
