import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import MyComponent from './MyComponent'
// import FormComponent from './FormComponent'
import Logo from './assets/logo-img.png';
import Cards from './cards'

import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  // let list = [
  //         {
  //             image : Logo,
  //             name : "FSD",
  //             duration : "15 weeks",
  //             index : 1
  //         },
  //         {
  //             image : Logo,
  //             name : "AWS",
  //             duration : "8 weeks",
  //             index : 2
  //         },
  //         {
  //             image : Logo,
  //             name : "Flutter",
  //             duration : "12 weeks", 
  //             index : 3
  //         },
  //         {
  //             image : Logo,
  //             name : "Service Now",
  //             duration : "5 weeks",
  //             index : 4
  //         },
  //         {
  //             image : Logo,
  //             name : "Pega",
  //             duration : "6 weeks", 
  //             index : 5
  //         },
  //         {
  //             image : Logo,
  //             name : "FSD",
  //             duration : "15 weeks", 
  //             index : 6
  //         },
  //         {
  //             image : Logo,
  //             name : "AWS",
  //             duration : "8 weeks",
  //             index : 7
  //         },
  //         {
  //             image : Logo,
  //             name : "Flutter",
  //             duration : "12 weeks",
  //             index : 8
  //         },
  //         {
  //             image : Logo,
  //             name : "Service Now",
  //             duration : "5 weeks",
  //             index : 9
  //         },
  //         {
  //             image : Logo,
  //             name : "Pega",
  //             duration : "6 weeks", 
  //             index : 10
  //         }
  //     ]

  // return (
  //   <>

  //     <div className="parent">
  //       {
  //         list.map((ele) => {
  //           return (
  //             <Cards Data = {ele}/>
  //           )
  //         })
  //       }
  //     </div>
  //   </>
  // )

  const [Data, setData] = useState(0)
  const change = () => {
    setData(x => x+1)
    console.log(Data+1)
  }

  return (
    <>
    <button onClick={change}>Click here</button>
    {/* {Data == true ? <Component1 /> : <Component2 />} */}
    <h1>Count: {Data}</h1>
    </>
  )

}

export default App
