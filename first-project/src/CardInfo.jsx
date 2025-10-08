import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from "./assets/logo-img.png";
import "./Cards.css";

function CardInfo() {
  const data = [
    { image: Logo, name: "FSD", duration: "15 weeks", index: 1 },
    { image: Logo, name: "AWS", duration: "8 weeks", index: 2 },
    { image: Logo, name: "Flutter", duration: "12 weeks", index: 3 },
    { image: Logo, name: "Service Now", duration: "5 weeks", index: 4 },
    { image: Logo, name: "Pega", duration: "6 weeks", index: 5 },
    { image: Logo, name: "FSD", duration: "15 weeks", index: 6 },
    { image: Logo, name: "AWS", duration: "8 weeks", index: 7 },
    { image: Logo, name: "Flutter", duration: "12 weeks", index: 8 },
    { image: Logo, name: "Service Now", duration: "5 weeks", index: 9 },
    { image: Logo, name: "Pega", duration: "6 weeks", index: 10 },
  ];

  const { id } = useParams();
  const [myCard, setMyCard] = useState(null);

  useEffect(() => {
    const found = data.find((ele) => ele.index === parseInt(id));
    setMyCard(found);
  }, [id]);

  if (!myCard) return <h2>Loading...</h2>;

  return (
    <div className="card-details">
      <img className="logo_" src={myCard.image} alt="logo" />
      <div className="name">Name: {myCard.name}</div>
      <div className="duration">Duration: {myCard.duration}</div>
      <Link to="/" className="back-btn">Back to All Cards</Link>
    </div>
  );
}

export default CardInfo;
