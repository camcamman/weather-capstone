import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import React from "react";
import Head from "./Head";
import Home from "./Home";
import TenDayWeather from "./TenDayWeather";
import OneDay from "./OneDay";
import WrongZip from "./WrongZip"

export default function App () {
    return(
        <div>
            <Head />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/wrongZip" element={<WrongZip />}/>
                    <Route path="/tenDayWeather/:zip" element={<TenDayWeather />}/>
                    <Route path="/OneDayWeather/:zip/:date" element={<OneDay/>}/>
                </Routes>
            </Router>
        </div>
    )
}