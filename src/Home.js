import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Start () {
    const [tempZipState, setTempZipState] = useState({
        zip:""
    })

    function handleChange (e) {
        const {value} = e.target
        setTempZipState((prevState => {
            return{
                ...prevState,
                zip: value
            }
        }))
    }

    return(
        <div className="homeButtonDiv">
            <Link 
                to={`tenDayWeather/${tempZipState.zip}`}>
                <button className="homeButton">Search</button>
            </Link>

            <form className="homeForm">
                <input 
                    type="number"
                    placeholder="Zip"
                    value={tempZipState.zip}
                    onChange={handleChange}
                    className="homeFormInput"
                />
            </form>
        </div>
    )
}