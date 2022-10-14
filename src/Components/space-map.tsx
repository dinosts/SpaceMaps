import React from 'react';
import L from 'leaflet';
import {MapContainer , TileLayer, Marker, Popup, ZoomControl,} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "react-leaflet-markercluster/dist/styles.min.css";
import '../CSS/space-map-bug-fixes.css';
// @ts-ignore
import icon from 'leaflet/dist/images/marker-icon.png';
// @ts-ignore
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import Card from "@mui/material/Card";
import {Button, CardActionArea, CardActions} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// @ts-ignore
import MarkerClusterGroup from '@changey/react-leaflet-markercluster'
import type MarkerData from "../Types/MarkerData";

interface Props {
    generatePins: MarkerData[]
}

function SpaceMap(props: Props) {
    // Leaflet-react is bugged.
    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });


    L.Marker.prototype.options.icon = DefaultIcon;


    const THESSALONIKI_POSITION : L.LatLngExpression = [40.629269,22.947412]

    return (
            <MapContainer {...{center: THESSALONIKI_POSITION, zoom:6, scrollWheelZoom:false, zoomControl: false,}}>
                <ZoomControl position="topright" />
                <TileLayer  {...{attribution:'\'&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors', url:"https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png", maxZoom: 19,  }}/>
                <MarkerClusterGroup >
                    {props.generatePins.map((pinData) => createMarker(pinData))}
                </MarkerClusterGroup>
            </MapContainer>
    );
}

//

function createMarker(pinData: MarkerData){
    return (
        <Marker position={[pinData.lat,pinData.lon]} key={pinData.title}>
            <Popup maxWidth={200} >
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={pinData.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {pinData.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pinData.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </Popup>
        </Marker>
    )
}

export default SpaceMap;
