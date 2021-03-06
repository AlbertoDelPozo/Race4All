import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as data from './circuitos.json';
import 'leaflet-defaulticon-compatibility';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid, Typography } from '@mui/material';



function Map() {

  return (
    <Grid container direction="column"> 
      <Typography
        variant="h2"
        align="center"
        bgcolor="#15121E"
        height="auto"
        justifyContent="center"
        alignItems="center"
        mt={0}
      >
        Localización de los circuitos
      </Typography>
      <MapContainer
        center={[20.4378693, -3.8199622]}
        zoom={3}
        scrollWheelZoom={false}
        style={{ height: "100vh", width: "100%", zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.features.map((circuitos) => (
          <Marker
            key={circuitos.properties.library_ID}
            position={[
              circuitos.geometry.coordinates[0],
              circuitos.geometry.coordinates[1],
            ]}
          >
            <Popup>
              {circuitos.properties.circuit_name}
              <br />
              {circuitos.properties.country}
              <p>Conoce el circuito:</p>
              <iframe
                width="175"
                height="100"
                src={circuitos.properties.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Grid>
  );
}

export default Map
