import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function OneDay () {
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })
    const zipDate = useParams()

    api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
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
        console.log(forecastday)

        // filtered = response.data.forecast.forecastday.date.filter(checkAdult)
        // filtered = response.data.forecast.forecastday.date.filter((item) => item === 2022-12-12)
        // filtered = response.data.forecast.forecastday.filter((item) => item.date === "2022-12-12")
        const result = forecastday.filter(findDate)

        function findDate(date) {
            return date.date === "2022-12-15";
        }
        console.log(result)
    })
    .catch((error) => console.error(error))

    return(
        <div>
            <h1>One Day</h1>
        </div>
    )
}