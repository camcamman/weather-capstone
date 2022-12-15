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
            {/* <Link to="/tenDayWeather"><button onClick={enterZip}>Enter Zip</button></Link>  */}
            {/* <Link to="/tenDayWeather"><button>Enter Zip</button></Link>  */}
                <Routes>
                    <Route path="/" element={<Home />}/>

                    {/* <Route path="/tenDayWeather" element={<TenDayWeather />}/> */}
                    {/* <Route path="/tenDayWeather/:zip" element={<TenDayWeather />}/> */}
                    {/* <Route path="/tenDayWeather" state={{zip: zip}} element={<TenDayWeather />}/> */}
                    {/* <Route path="/tenDayWeather/:zip" element={<TenDayWeather />}/> */}

                    {/* <Route path="/tenDayWeather/:zip" element={<TenDayWeather />}/>
                    <Route path="/tenDayWeather/:zip">
                        <Route index element={<TenDayWeather />} />
                        <Route path="/OneDayWeather/:zip/:date"/>
                    </Route> */}
                    <Route path="/tenDayWeather/:zip" element={<TenDayWeather />}/>
                    <Route path="/OneDayWeather/:zip/:date"/>

                </Routes>
            </Router>
        </div>
    )
}