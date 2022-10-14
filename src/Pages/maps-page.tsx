import SpaceMenu from "../Components/space-menu";
import SpaceMap from "../Components/space-map";
import React from "react";
import { Grid} from "@mui/material";


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
            <Grid gridRow={1} sx={{ width:'100%', height:'100%' }}>
                <Grid sm={12}>
                <SpaceMenu />
                </Grid>

                <Grid sm={12}>
                <SpaceMap generatePins={pins}/>
                </Grid>

            </Grid>
    )
}
    export default MapsPage;
