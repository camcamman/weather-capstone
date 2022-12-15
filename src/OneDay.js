import React from "react";
import axios from 'axios';

export default function OneDay () {
    const api = axios.create({
        baseURL: `http://api.weatherapi.com/v1`
    })

    api.get(`/forecast.json?key=fd911d07ca5441b7b9014014220912&q=84003&days=10`)
    .then(response => {
        console.log(response)
    })
    .catch((error) => console.error(error))

    return(
        <div>
            <h1>One Day</h1>
        </div>
    )
}