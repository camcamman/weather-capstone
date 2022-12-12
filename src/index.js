import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {WeatherContextSetter} from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WeatherContextSetter>
        <App />
    </WeatherContextSetter>
);