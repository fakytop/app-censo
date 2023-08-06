import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState } from 'react';

delete L.Icon.Default.prototype._getIconUrl;

//sacar los default
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const Map = ({ ...dataPersonsPerDpto }) => {

    return (

                <div>
                    <MapContainer center={[-33, -56]} zoom={6} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            dataPersonsPerDpto.data.map(dpto => {
                                return <Marker key={dpto.idGraph} position={[dpto.latitud, dpto.longitud]}>
                                    <Popup>
                                        <h6>{dpto.nombreGraph}</h6>
                                        <p>Total censados: {dpto.qant}</p>
                                    </Popup>
                                </Marker>
                            })
                        }
                    </MapContainer>

                </div>

    )
}

export default Map