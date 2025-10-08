import React from "react";
import { useState, useEffect } from "react";

function ImageUploadmethod2() {
    const [ImagePath, setImagePath] = useState(null)
    const GetData = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () =>{
            setImagePath(reader.result)
        }
    }
    return (
        <>

        <input type="file" onChange={(event) => GetData(event)} />
        {
            ImagePath ? <img src= {ImagePath} alt="Image is cracked" />  : <></>
        }
        

        </>
    )
}

export default ImageUploadmethod2;