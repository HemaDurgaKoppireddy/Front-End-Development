// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./AddData.css"

// function AddData() {
//     return(
//         <>
//         <div></div>
//         </>
//     )
// }

// export default AddData;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddData({ addPlace }) {
  const [form, setForm] = useState({
    name: "",
    city: "",
    state: "",
    description: "",
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: URL.createObjectURL(files[0]) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace({ ...form, id: Date.now() });
    setForm({ name: "", city: "", state: "", description: "", image: null });
    navigate("/view");
  };

  return (
    <div className="form-container">
      <h3>Add Location Details</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} required></textarea>
        <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        {form.image && <img src={form.image} alt="preview" className="preview" />}
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
}

export default AddData;
