import React, {useContext, useEffect} from "react";
import { weatherContext } from "./Context";
import TenDayWeatherComponent from "./TenDayWeatherComponent"
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function TenDayWeather () {
    const getZip = useContext(weatherContext)
    let forecastArray = []
    const zip = useParams()
    
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })
    
    console.log(zip)
    // console.log(getZip)

    useEffect(() => {
        //would do 10 but the api only lets me do 3 day for free 
        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=${zip.zip}&days=10`)
        // api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        .then(response => {
            // console.log(response.data.forecast.forecastday)
            // console.log(response.data.forecast)
            // console.log(response.data)
            response.data.forecast.forecastday.map((theItem) => {
                // forecastArray.push(response.data.forecast.forecastday)
                // console.log(theItem)
                forecastArray.push(theItem)
                // console.log(forecastArray)
            })
            // console.log(forecastArray)
        })
        .catch((error) => console.error(error))
        // console.log(forecastArray)
    }, [])

    // const killZip = useContext(weatherContext)
    // console.log(forecastArray)

    // killZip.setStateFunctions.killingZipButtonFunction()
    return(
        <div>
            <h1>ten day weather</h1>
            <TenDayWeatherComponent 
            forecastArray = {forecastArray}/>
        </div>
    )
}