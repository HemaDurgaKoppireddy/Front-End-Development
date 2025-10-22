import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function CardDetails({ places }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const place = places.find((p) => p.id === Number(id));

  if (!place) {
    return <p>Place not found.</p>;
  }

  return (
    <div className="details-container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <img src={place.image} alt={place.name} />
      <h2>{place.name}</h2>
      <p><strong>City:</strong> {place.city}</p>
      <p><strong>State:</strong> {place.state}</p>
      <p><strong>Description:</strong> {place.description}</p>
    </div>
  );
}

export default CardDetails;
