// import React,{Component} from 'react';
// import './Cards.css'
// import Logo from './assets/logo-img.png';

// const  Cards= (Props) =>{
//     return(
//         <div className={Props.Data.index %2 ==0 ? "card bg-even" : "card bg-odd"}>
//             <div >
//                 <img className="logo_" src= {Props.Data.image} ></img>
//             </div>
//             <div className="info">
//                 <div className="name">{Props.Data.name}</div>
//                 <div className="duration">{Props.Data.duration}</div>
//             </div>
//         </div>
//     )
// }

// export default Cards





import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";

const Cards = ({ Data }) => {
  return (
    <Link to={`/card/${Data.index}`} className="card-link">
      <div className={`card ${Data.index % 2 === 0 ? "bg-even" : "bg-odd"}`}>
        <div>
          <img className="logo_" src={Data.image} alt="logo" />
        </div>
        <div className="info">
          <div className="name">{Data.name}</div>
          <div className="duration">{Data.duration}</div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;

