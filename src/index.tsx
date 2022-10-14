import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import MapsPage from "./Pages/maps-page";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const pins= [
    {
        lat:40.636494,
        lon:22.951214,
        title:  "SpaceTime xronoxronos",
        description: "H sofia edw ftiaxnei ksylokataskeves! foverotato!!",
        image: "https://spacetime.community/media/pages/home/arcade_image_2_smaller.jpg"
    },
    {
        lat:40.637594,
        lon:22.952314,
        title:  "Tsit's workspace",
        description: "asdasda",
        image: "https://www.elmtreesystem.com/wp-content/uploads/2017/03/TSIT_logo-1-855x425@2x.jpg"
    }
];

root.render(
    <React.StrictMode>
        <MapsPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
