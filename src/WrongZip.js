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
        <div>
            <p>Sorry, it seams that the zip is wrong</p>

            <Link 
                to={`tenDayWeather/${tempZipState.zip}`}>
                <button>Enter Zip</button>
            </Link>

            <form>
                <input 
                    type="number"
                    placeholder="Zip"
                    value={tempZipState.zip}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}