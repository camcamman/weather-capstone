import React from "react";

export default function LongName (props) {
    const betterProps = props.forecastArray[0]
    console.log(betterProps)

    const mappedBetterProps = betterProps.map(() => {
        return(
            <div></div>
        )
    })
}