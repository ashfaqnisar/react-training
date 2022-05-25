import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
// import SampleStyle from './sampleStyles';
// import Students from "./Students"
// import ConditionalRenderingApp from "./conditionalRendering"
// import ListApp from './lists';
import EventsApp from './events';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <EventsApp />
    </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
