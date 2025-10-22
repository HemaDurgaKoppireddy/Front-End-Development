// import React from "react";
// import { useState, useEffect, useContext } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./ViewData.css"

// function ViewData() {

// }

// export default ViewData;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function ViewData({ places }) {
  const [search, setSearch] = useState("");

  const filtered = places.filter(
    (place) =>
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.city.toLowerCase().includes(search.toLowerCase()) ||
      place.state.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="view-container">
      <h3>All Locations</h3>
      <input
        type="text"
        placeholder="Search by Name, City, or State..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="cards-container">
        {filtered.length > 0 ? (
          filtered.map((place) => (
            <Link to={`/details/${place.id}`} key={place.id} className="card">
              <img src={place.image} alt={place.name} />
              <h4>{place.name}</h4>
              <p>{place.city}, {place.state}</p>
            </Link>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default ViewData;
