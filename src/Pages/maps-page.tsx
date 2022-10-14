import SpaceMenu from "../Components/space-menu";
import SpaceMap from "../Components/space-map";
import React from "react";


function MapsPage() {


    const [pins, setPins] = React.useState([
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
    ])



    return (
        <div>
            <SpaceMenu />
            <SpaceMap generatePins={pins}/>

        </div>
    )
}
    export default MapsPage;
