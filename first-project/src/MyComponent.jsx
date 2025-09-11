import React,{Component} from 'react';
import './MyComponent.css'
import Logo from './assets/logo-img.png';

const MyComponent = () =>{
    
    return (
        <header className='header'> 
            <div>
                <img src={Logo} className='logo' alt='check' />
            </div>
            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Contact</a>
            </div>  
        </header>
        

    );
}

export default MyComponent