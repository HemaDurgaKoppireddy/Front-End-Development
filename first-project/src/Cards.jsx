import React,{Component} from 'react';
// import './MyComponent.css'
import './Cards.css'
import Logo from './assets/logo-img.png';

const  Cards= (Props) =>{
    return(
        <div className={Props.Data.index %2 ==0 ? "card bg-even" : "card bg-odd"}>
            <div >
                <img className="logo_" src= {Props.Data.image} ></img>
            </div>
            <div className="info">
                <div className="name">{Props.Data.name}</div>
                <div className="duration">{Props.Data.duration}</div>
            </div>
        </div>
    )
}

export default Cards
