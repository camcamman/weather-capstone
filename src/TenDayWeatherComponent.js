import React from "react";

export default function TenDayWeatherComponent (props) {
    // console.log(props)
    // console.log(props.forecastArray)

    const betterProps = props.forecastArray

    // const mappedBetterProps = betterProps.map((theItem) => console.log("worked"))
    const mappedBetterProps = betterProps.map((theItem) => {
        // console.log("mapping")
        // console.log(theItem.day.condition.icon)
        return(
            <div>
                <img src={theItem.day.condition.icon}/>
            </div>
        )
    })
    // console.log(mappedBetterProps)
    return(
        <div>{mappedBetterProps}</div>
        // <div>test</div>
    )
}