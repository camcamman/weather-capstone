import React, {useContext, useState} from "react";
import { weatherContext } from "./Context";

export default function Start () {
    const zipUpdate = useContext(weatherContext)
    const [tempZipState, setTempZipState] = useState({
        zip:""
    })

    // console.log(zipUpdate.zipState.Zip)
    // console.log(zipUpdate.zipState.zip)
    // console.log(zipUpdate.setStateFunctions.updateZipStateFunction)

    function handleChange (e) {
        const {value} = e.target
        setTempZipState((prevState => {
            return{
                ...prevState,
                zip: value
            }
        }))
        console.log(tempZipState)
    }

    function handleSubmit (e) {
        e.preventDefalut()
        zipUpdate.setStateFunctions.updateZipStateFunction(tempZipState.zip)
    }

    return(
        <div>
            <a href="/tenDayWeather"><button>Enter Zip</button></a>

            <input 
                type="number"
                placeholder="Zip"
                value={tempZipState.zip}
                onChange={handleChange}
            />
        </div>
    )
}