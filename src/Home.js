import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Start () {
    const [tempZipState, setTempZipState] = useState({
        zip:""
    })
    const navigate = useNavigate()

    function handleChange (e) {
        let {value} = e.target

        // if(value === "1"){
        //     value=""
        // } else if(value === "2"){
        //     value=""
        // } else if(value === "3"){
        //     value=""
        // }

        setTempZipState((prevState => {
            return{
                ...prevState,
                zip: value
            }
        }))
    }

    function handleSubmit (e) {
        e.preventDefault()
            navigate(`tenDayWeather/${tempZipState.zip}`)
        }

    return(
            <form className="homeForm" onSubmit={handleSubmit}>
                <div className="flexCenter">
                    <input 
                        type="number"
                        placeholder="Zip"
                        value={tempZipState.zip}
                        onChange={handleChange}
                        className="homeFormInput"
                        required
                        />
                    </div>

                <div className="flexCenter">
                    <input
                        type="submit"
                        className="homeButton buttonTransition"
                    />
                </div>
            </form>
    )
}