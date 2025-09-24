import React from "react";
import { useState, useEffect } from "react";
import Logo from "./assets/logo-img.png";
import "./Cards.css";

function SearchCards() {
  const [CompleteList, setCompleteList] = useState([
    {
      image: Logo,
      name: "FSD",
      duration: "15 weeks",
      index: 1,
    },
    {
      image: Logo,
      name: "AWS",
      duration: "8 weeks",
      index: 2,
    },
    {
      image: Logo,
      name: "Flutter",
      duration: "12 weeks",
      index: 3,
    },
    {
      image: Logo,
      name: "Service Now",
      duration: "5 weeks",
      index: 4,
    },
    {
      image: Logo,
      name: "Pega",
      duration: "6 weeks",
      index: 5,
    },
    {
      image: Logo,
      name: "FSD",
      duration: "15 weeks",
      index: 6,
    },
    {
      image: Logo,
      name: "AWS",
      duration: "8 weeks",
      index: 7,
    },
    {
      image: Logo,
      name: "Flutter",
      duration: "12 weeks",
      index: 8,
    },
    {
      image: Logo,
      name: "Service Now",
      duration: "5 weeks",
      index: 9,
    },
    {
      image: Logo,
      name: "Pega",
      duration: "6 weeks",
      index: 10,
    },
  ]);
  const [SearchResult, setSearchResult] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm !== "") {
      const result = CompleteList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResult(result);
    } else {
      setSearchResult(CompleteList);
    }
  }, [searchTerm, CompleteList]);

  return (
    <>
    <body>
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        type="text"
        placeholder="Search..."
      />
      <div className="parent">
        {SearchResult.map((ele) => {
          return (
            // <Cards Data = {ele}/>
            <div
              className={ele.index % 2 == 0 ? "card bg-even" : "card bg-odd"}
            >
              <div>
                <img className="logo_" src={ele.image}></img>
              </div>
              <div className="info">
                <div className="name">{ele.name}</div>
                <div className="duration">{ele.duration}</div>
              </div>
            </div>
          );
        })}
      </div>
      </body>
    </>
  );
}

export default SearchCards;
