import React, { useState } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";

const Map = (props) => {
    const [markers, setMarkers] = useState([])
    const [defaultCenter, setDefaultCenter] = useState({
        lat: 39.448587,
        lng: -77.383237,
    });


	const mapStyle = {
		height: "100vh",
		width: "100vw",
	};


	// const Load = (marker) => {
		// console.log("Marker: ", marker);
	// };

    const clickMap = (map) => {
        console.log("Map Clicked! ", map)
        let position = {
            lat: map.latLng.lat(),
            lng: map.latLng.lng()
        }
        setMarkers([...markers, position])
        setDefaultCenter({})
        console.log(markers)
        // console.log("Coords: ", map.latLng.lat())
        // console.log("Coords: ", map.latLng.lng())
    }


	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyB8r6T0rh5o0NO8AnPda1JDdlQYY31y6Ak">
				<GoogleMap
                    onClick={ clickMap }
					id="marker-example"
					mapContainerStyle={mapStyle}
					zoom={10}
					center={defaultCenter}
                    className="map"
				>
                    {
                        markers.map((marker, i) => {
                            return(
                                <MarkerF 
                                    key={i}
                                    position={marker}>
                                </MarkerF>
                            )
                        })
                    }
					{/* <MarkerF
						onLoad={Load}
						position={{
							lat: 39.3055,
							lng: -77.1915,
						}}
					/>
					<MarkerF
						onLoad={Load}
						position={{
							lat: 39.4055,
							lng: -77.1915,
						}}
					/>
					<MarkerF
						onLoad={Load}
						position={{
							lat: 39.5055,
							lng: -77.1915,
						}}
					/> */}
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Map;
