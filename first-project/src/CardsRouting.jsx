import CardsData from "./CardsData";
import CardInfo from "./CardInfo";
import "./Cards.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";



function CardsRouting() {
  return (
    <>

    {/* <RoutePaths /> */}
    {/* <SearchCards /> */}
    {/* <CardsData /> */}

    {/* <BrowserRouter>
    <Routes>
      <Route path="/cards-list" element= {<CardsData />} />
      <Route path="/card-details/:ID" element= {<Card-info />} />
    </Routes>
    </BrowserRouter> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsData />} />
        <Route path="/card/:id" element={<CardInfo />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default CardsRouting;