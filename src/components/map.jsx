import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./map.css";

const Map = (props) => {
	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(defaultCenter);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const mapStyle = {
		height: "100vh",
		width: "100vw",
	};
	const defaultCenter = {
		lat: 39.448587,
		lng: -77.383237,
	};

	const Load = (marker) => {
		console.log("Marker: ", marker, marker.position);
	};

	const position = {
		lat: 39.4055,
		lng: -77.1915,
	};

	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyB8r6T0rh5o0NO8AnPda1JDdlQYY31y6Ak">
				<GoogleMap
					id="marker-example"
					mapContainerStyle={mapStyle}
					zoom={10}
					center={defaultCenter}
				>
                    <Marker onLoad={Load} position={position} />
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Map;
