import React from "react";
import { useState, useEffect } from "react";

function ImageUploadmethod1() {
    const [ImagePath, setImagePath] = useState(null)
    const GetData = (event) => {
        const file = event.target.files[0]
        const path = URL.createObjectURL(file)
        setImagePath(path)
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

export default ImageUploadmethod1;