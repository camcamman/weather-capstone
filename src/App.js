import React, {useContext, useEffect} from "react";
import Head from "./Head";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./Home";
import TenDayWeather from "./TenDayWeather";

export default function App () {
    return(
        <div>
            <Head />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/tenDayWeather" element={<TenDayWeather />}/>
                </Routes>
            </Router>
        </div>
    )
}