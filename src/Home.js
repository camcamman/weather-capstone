import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
// import { createBrowserHistory } from "history";

export default function Start () {
    const [tempZipState, setTempZipState] = useState({
        zip:""
    })

    // console.log(zipUpdate)
    // console.log(tempZipState)
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
        // console.log(tempZipState)
        // console.log(tempZipState.zip)
    }

    // function enterZip () {
    //     zipUpdate.setStateFunctions.updateZipStateFunction(tempZipState.zip)
    //     console.log(zipUpdate)
    //     // history.push("./tenDayWeather/84003")
    // }

    // console.log(zipUpdate.setStateFunctions.updateZipStateFunction)

    return(
        <div>
            {/* <a href="/tenDayWeather/:zip"><button onClick={enterZip}>Enter Zip</button></a> */}
            {/* <a href="/tenDayWeather"><button onClick={enterZip}>Enter Zip</button></a> */}
            {/* <Link to="/tenDayWeather"><button onClick={enterZip}>Enter Zip</button></Link>  */}
            {/* <button onClick={enterZip}>Enter Zip</button> */}
            {/* <Link to={`tenDayWeather/84003`}>test</Link> */}
            {/* <Link to={`tenDayWeather/${tempZipState.zip}`}>test</Link> */}
            <Link to={`tenDayWeather/${tempZipState.zip}`}><button>Enter Zip</button></Link>

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