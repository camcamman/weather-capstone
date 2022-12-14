import React from "react";

export default function TenDayWeatherComponent (props) {
    // console.log(props)
    // console.log(props.forecastArray)

    const betterProps = props.forecastArray
    
    // const mappedBetterProps = betterProps.map((theItem) => console.log("worked"))
    const mappedBetterProps = betterProps.map((theItem) => {
        // console.log("mapping")
        // console.log(theItem.day.condition.icon)
        // console.log(theItem.day.condition)
        // console.log(theItem.day)

        // console.log(theItem.date)

        // console.log(theItem)
        // console.log(theItem.day)
        // console.log(theItem.day.maxtemp_f)
        // console.log(theItem.day.maxtemp_f)
        // console.log(theItem.day.avgtemp_f)

        // console.log(theItem)
        // console.log(theItem.day)
        // console.log(theItem.day.daily_chance_of_rain)

        // console.log(theItem)
        // console.log(theItem.day)
        // console.log(theItem.day.daily_chance_of_snow)

        // console.log(theItem)
        // console.log(theItem.day)
        // console.log(theItem.day.condition)
        // console.log(theItem.day.condition.text)
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
    // console.log(mappedBetterProps)
    return(
        <div>{mappedBetterProps}</div>
        // <div>test</div>
    )
}