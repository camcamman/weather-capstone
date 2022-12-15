import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function OneDay () {
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })
    const zipDate = useParams()
    const [oneDayState, setOneDayState] = useState()

    useEffect(() => {
        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        // api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=${zipDate.zip}&days=10`)
        .then(response => {
            const forecastday = response.data.forecast.forecastday
            
            // console.log(response.data)
            // console.log(response.data.forecast)
            // console.log(response.data.forecast.forecastday)
            // console.log(response.data.forecast.forecastday)
            // const forecast = response.data.forecast
            
            // console.log(zipDate)
            // console.log(zipDate.zip)
            // console.log(zipDate.date)
            
            // console.log(forecast)
            // console.log(forecastday)
            
            // filtered = response.data.forecast.forecastday.date.filter(checkAdult)
            // filtered = response.data.forecast.forecastday.date.filter((item) => item === 2022-12-12)
            // filtered = response.data.forecast.forecastday.filter((item) => item.date === "2022-12-12")
            const result = forecastday.filter(findDate)
            
            function findDate(date) {
                return date.date === "2022-12-15";
                // return date.date === zipDate.date;
            }
            // console.log(result)
            
            setOneDayState(result)
        })
        .catch((error) => console.error(error))
    }, [])
        
        // console.log(oneDayState)
        // console.log(oneDayState[0])
        console.log(oneDayState[0].hour)

        // const mappedOneDay = oneDayState[0].hour.map((item) => {console.log(item)})
        const mappedOneDay = oneDayState[0].hour.map((item) => {

            const betterTime = item.time.split(" ");
            
            // console.log(item)
            // console.log(item.time)

            // console.log(item)
            // console.log(item.condition)
            // console.log(item.condition.icon)
            // console.log(item.condition.text)

            // console.log(item)
            // console.log(item.temp_f)

            // console.log(item)
            // console.log(item.feelslike_f)

            // console.log(item)
            // console.log(item.windchill_f)

            // console.log(betterTime)
            // console.log(betterTime[1])
            
            return(
                <div>
                    <img src={item.condition.icon}/>
                    <p>{betterTime[1]}</p>
                    <p>{item.condition.text}</p>
                    <p>The temperature is {item.temp_f}° fahrenheit</p>
                    <p>Wind chill {item.windchill_f}° fahrenheit</p>
                </div>
            )
        })

        return(
            <div>
                <p>{zipDate.date}</p>
                <h1>One Day</h1>
                <div>
                    {mappedOneDay}
                </div>  
            </div>
    )
}