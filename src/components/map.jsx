import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = props => {

    const mapStyle = {
        height: '100vh',
        width: '100vw'
    }
    const defaultCenter = {
        lat: 39.448587,
        lng: -77.383237
    }

    const locations = [
        {
          name: "Location 1",
          location: { 
            lat: 39.448590,
            lng: -77.383245 
          },
        },
        {
          name: "Location 2",
          location: { 
            lat: 40.3917,
            lng: -76.1649
          },
        },
        {
          name: "Location 3",
          location: { 
            lat: 41.3773,
            lng: -75.1585
          },
        },
        {
          name: "Location 4",
          location: { 
            lat: 41.3797,
            lng: -77.1682
          },
        },
        {
          name: "Location 5",
          location: { 
            lat: 39.4055,
            lng: -77.1915
          },
        }
      ];

    return(
        <>
            <LoadScript googleMapsApiKey='AIzaSyB8r6T0rh5o0NO8AnPda1JDdlQYY31y6Ak'>
                <GoogleMap
                    mapContainerStyle={mapStyle}
                    zoom={10}
                    center={defaultCenter}
                />
                {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
            </LoadScript>
        </>
    )
}

export default Map