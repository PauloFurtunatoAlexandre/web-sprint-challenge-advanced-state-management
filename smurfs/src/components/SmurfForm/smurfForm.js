import React, { useState } from "react";

import "./smurfForm.scss";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handlechange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div className="new-smurf-form">
      <h2>Add a new Smurf Here:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={newSmurf.name}
          onChange={handlechange}
          placeholder="Name..."
        />
        <br />
        <input
          type="text"
          id="age"
          name="age"
          value={newSmurf.age}
          onChange={handlechange}
          placeholder="Age..."
        />
        <br />
        <input
          type="text"
          id="height"
          name="height"
          value={newSmurf.height}
          onChange={handlechange}
          placeholder="Height..."
        />
        <br />
        <button className="add-btn">Add New Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;
