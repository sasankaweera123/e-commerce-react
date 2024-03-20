import React from "react";
import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import Icon from 'leaflet';

import './GoogleMapLocation.css';

const GoogleMapLocation = () => {
    const defaultProps = {
        center: {
            lat: 6.878624818934343,
            lng: 79.88158859399894
        },
        zoom: 15
    };
    const locations = [
        {geoCode: [6.881479442016035, 79.88566555175866], text: 'A'},
        {geoCode: [6.874385458968828, 79.88218940882663], text: 'B'},
        {geoCode: [6.878028328361884, 79.87742580554941], text: 'C'},
        {geoCode: [6.873874176819139, 79.88909877934582], text: 'D'},
    ];

    const customIcon = new Icon.Icon({
        iconUrl: "https://www.freeiconspng.com/uploads/blue-location-icon-png-19.png",
        iconSize: [30, 30],
        shadows: true
    });

    return (
        <div className="map-location">
            <MapContainer center={defaultProps.center} zoom={defaultProps.zoom}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location, index) => (
                    <Marker key={index} position={location.geoCode}
                            icon={customIcon}>
                        <Popup>
                            {location.text}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>

        </div>
    )
}

export default GoogleMapLocation;