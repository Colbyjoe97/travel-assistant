import React, { Component } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";

const Map = (props) => {
	const [map, setMap] = React.useState(null);

	const mapStyle = {
		height: "100vh",
		width: "100vw",
	};
	const defaultCenter = {
		lat: 39.448587,
		lng: -77.383237,
	};

	const Load = (marker) => {
		console.log("Marker: ", marker);
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
					<MarkerF
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
					/>
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Map;
