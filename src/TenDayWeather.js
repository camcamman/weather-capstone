import React, {useContext, useEffect, useState} from "react";
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

export default function TenDayWeather () {
    let forecastArray = []
    const [forecastState, setForecastState] = useState([])
    const zip = useParams()
    const navigate = useNavigate()
    
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })
    
    useEffect(() => {
        //would do 10 but the api only lets me do 3 day for free 

        api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=${zip.zip}&days=10`)
        // api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
        .then(response => {

            response.data.forecast.forecastday.map((theItem) => {
                setForecastState((prevItem) => {
                    return[
                        ...prevItem,
                        theItem
                    ]
                })
                forecastArray.push(theItem)
            })
        })
        .catch((error) => {
            console.error(error)
            navigate("/wrongZip")
    })
    }, [])

    const mappedForecast = forecastState.map((theItem) => {
        return(
            <Link to={`/OneDayWeather/${zip.zip}/${theItem.date}`}>
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
            </Link>
        )
    })

    return(
        <div>
            <div>{mappedForecast}</div>
        </div>
    )
}