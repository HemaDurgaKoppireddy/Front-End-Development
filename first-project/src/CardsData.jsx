// import { useState, useEffect } from "react";
// import Logo from "./assets/logo-img.png";
// import Cards from "./cards";
// import "./Cards.css"

// function CardsData() {
//   let list = [
//     {
//       image: Logo,
//       name: "FSD",
//       duration: "15 weeks",
//       index: 1,
//     },
//     {
//       image: Logo,
//       name: "AWS",
//       duration: "8 weeks",
//       index: 2,
//     },
//     {
//       image: Logo,
//       name: "Flutter",
//       duration: "12 weeks",
//       index: 3,
//     },
//     {
//       image: Logo,
//       name: "Service Now",
//       duration: "5 weeks",
//       index: 4,
//     },
//     {
//       image: Logo,
//       name: "Pega",
//       duration: "6 weeks",
//       index: 5,
//     },
//     {
//       image: Logo,
//       name: "FSD",
//       duration: "15 weeks",
//       index: 6,
//     },
//     {
//       image: Logo,
//       name: "AWS",
//       duration: "8 weeks",
//       index: 7,
//     },
//     {
//       image: Logo,
//       name: "Flutter",
//       duration: "12 weeks",
//       index: 8,
//     },
//     {
//       image: Logo,
//       name: "Service Now",
//       duration: "5 weeks",
//       index: 9,
//     },
//     {
//       image: Logo,
//       name: "Pega",
//       duration: "6 weeks",
//       index: 10,
//     },
//   ];

//   return (
//     <>
//       <div className="parent">
//         {list.map((ele) => (
//           <Cards key={ele.index} Data={ele} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default CardsData;






import React from "react";
import Logo from "./assets/logo-img.png";
import Cards from "./Cards";
import "./Cards.css";

function CardsData() {
  const list = [
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

  return (
    <div className="parent">
      {list.map((ele) => (
        <Cards key={ele.index} Data={ele} />
      ))}
    </div>
  );
}

export default CardsData;

