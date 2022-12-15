import React, { Component, useState } from 'react'
import { useParams } from 'react-router-dom'
import Map from './map'

const Location = props => {
    const [lat, setLat] = useState()
    const [lng, setLng] = useState()
    
    const getPosition = (position) => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
        console.log(lat, lng)
    }
    navigator.geolocation ? navigator.geolocation.getCurrentPosition(getPosition) : alert("Please enable your location")
    // console.log("test", state.lat, lng)
    return(
        <> 
            <p>{lat}, {lng}</p>
            <Map lat={lat} lng={lng} />
        </>
    )
}

export default Location