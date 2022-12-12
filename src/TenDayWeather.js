import React, {useContext} from "react";
import { weatherContext } from "./Context";

export default function TenDayWeather () {

    const killZip = useContext(weatherContext)

    killZip.setStateFunctions.killingZipButtonFunction()
    return(
        <div>
            <h1>ten day weather</h1>
        </div>
    )
}