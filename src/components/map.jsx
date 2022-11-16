import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";

const Map = (props) => {
    const [markers, setMarkers] = useState([])
    const [defaultCenter, setDefaultCenter] = useState({
        lat: 39.448587,
        lng: -77.383237,
    });
    const { sHeight, sWidth } = useWindowDimensions();
    console.log(sWidth)
    
	const mapStyle = {
		height: "100vh",
		width: "calc(100vw - 300px)",
	};

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

    function getWindowDimensions() {
        const { innerWidth: sWidth, innerHeight: sHeight } = window;
        return {
          sWidth,
          sHeight
        };
      }
      
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
      
        useEffect(() => {
          function handleResize() {
            setWindowDimensions(getWindowDimensions());
          }
      
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);
      
        return windowDimensions;
      }


	return (
		<>
        {sWidth}
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
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Map;
