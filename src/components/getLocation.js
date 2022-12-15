import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom'
import Map from './map'

const Location = props => {
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    const [center, setCenter] = useState({})
    const getPosition = (position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        setCenter({lat: lat, lng: lng})
        // console.log(lat, lng)
    }
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(getPosition) : alert("Please enable your location")
    // console.log("test", state.lat, lng)
    return(
        <> 
            <Map center={center} />
        </>
    )
}

export default Location