import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, redirect, useParams } from "react-router-dom";

export default function OneDay () {
    const zipDate = useParams()
    const [oneDayState, setOneDayState] = useState([])
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })

    useEffect(() => {
        // api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=${zipDate.zip}&days=10`)
        .then(response => {
            
            const forecastday = response.data.forecast.forecastday
            const result = forecastday.filter(findDate)
            
            function findDate(date) {
                // return date.date === "2022-12-15";
                return date.date === zipDate.date;
            }

            setOneDayState(result[0].hour)
        })
        .catch((error) => {
                console.error(error)
                return redirect("/")
        })
    }, [])
        
    const mappedOneDay = oneDayState.map((item) => {
        const betterTime = item.time.split(" ");
        
        return(
            <div className="OneDayMappedMainDiv">
                <img className="oneDayIcon" src={item.condition.icon}/>
                <p className="oneDayTime">{betterTime[1]}</p>
                <p className="oneDayMainText">{item.condition.text}</p>
                <p>The temperature is {item.temp_f}° fahrenheit</p>
                <p>Wind chill {item.windchill_f}° fahrenheit</p>
            </div>
        )
    })

    return(
        <div>
            <Link to={`/tenDayWeather/${zipDate.zip}`}>
            <button className="oneDayMainButton buttonTransition">Go Back</button>
            </Link>
            <p className="oneDayMainDate">{zipDate.date}</p>
            <div className="oneDayMainDivHeadDiv">
                <div className="oneDayMainDiv">
                    {mappedOneDay}
                </div>  
            </div>
        </div>
    )
}