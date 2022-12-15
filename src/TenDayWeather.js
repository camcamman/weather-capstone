import React, {useContext, useEffect, useState} from "react";
// import { weatherContext } from "./Context";
import TenDayWeatherComponent from "./TenDayWeatherComponent"
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function TenDayWeather () {
    // const getZip = useContext(weatherContext)
    let forecastArray = []
    const [forecastState, setForecastState] = useState([])
    const zip = useParams()
    // const [done, setDone] = useState(false)
    
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })
    
    // console.log(zip)
    // console.log(getZip)

    useEffect(() => {
        //would do 10 but the api only lets me do 3 day for free 
        // api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=${zip.zip}&days=10`)
        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        .then(response => {
            // console.log(response.data.forecast.forecastday)
            // console.log(response.data.forecast)
            // console.log(response.data)
            response.data.forecast.forecastday.map((theItem) => {
                // forecastArray.push(response.data.forecast.forecastday)
                // console.log(theItem)
                setForecastState((prevItem) => {
                    return[
                        ...prevItem,
                        theItem
                    ]
                })
                forecastArray.push(theItem)
            })
        })
        .catch((error) => console.error(error))
    }, [])

    // console.log(forecastState)

    // const test = forecastState.map(() => {
    //     return (
    //         <div>1</div>
    //     )
    // })

    const test = forecastState.map((theItem) => {
        return(
            <div>
                <p>{theItem.date}</p>
                <img src={theItem.day.condition.icon}/>
                <div>
                    <p>{theItem.day.condition.text}</p>

                    <p>Max {theItem.day.maxtemp_f}° fahrenheit</p>
                    <p>Average {theItem.day.avgtemp_f}° fahrenheit</p>
                    <p>Min {theItem.day.mintemp_f}° fahrenheit</p>

                    <p>Chance of rain {theItem.day.daily_chance_of_rain}%</p>
                    <p>Chance of snow {theItem.day.daily_chance_of_snow}%</p>
                </div>
            </div>
        )
    })

    // console.log(forecastArray)

    return(
        <div>
            <h1>ten day weather</h1>
            <div>{test}</div>
            {/* <TenDayWeatherComponent 
            forecastArray = {forecastArray}/> */}
            {/* <div>{weatherLoadState}</div> */}
        </div>
    )
}