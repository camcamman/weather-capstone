import React, {useContext, useEffect} from "react";
import { weatherContext } from "./Context";
import TenDayWeatherCom from "./TenDayWeatherComponent"
import axios from 'axios';

export default function TenDayWeather () {
    let forecastArray = []

    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })

    useEffect(() => {
        //would do 10 but the api only lets me do 3 day for free 
        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        .then(response => {
            forecastArray.push(response.data.forecast.forecastday)

        })
        .catch((error) => console.error(error))
    }, [])

    const killZip = useContext(weatherContext)
    console.log(forecastArray)

    killZip.setStateFunctions.killingZipButtonFunction()
    return(
        <div>
            <TenDayWeatherCom forecastArray = {forecastArray} />
            <h1>ten day weather</h1>
        </div>
    )
}