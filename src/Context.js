import React, {createContext, useState} from "react";

const weatherContext = createContext()

function WeatherContextSetter (props) {
    const [zipState, setZipState] = useState({
        zip:""
    })
    const [zipButtonState, setZipButtonState] = useState(true)

    const setStateFunctions = {
        killingZipButtonFunction:
        function killingZipButton () {
            setZipButtonState(false)
        },

        updateZipStateFunction:
        function updateZipState (newObjectZip) {
            setZipState(newObjectZip)
        }
    }

    return(
        <weatherContext.Provider
        value={{
            zipButtonState,
            setStateFunctions,
            zipState
        }}
        >
            {props.children}
        </weatherContext.Provider>
    )
}

export {weatherContext, WeatherContextSetter}