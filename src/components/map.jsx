import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import "./map.css";

const Map = (props) => {
    const [marker, setMarker] = useState({})
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

	const mapStyleFull = {
		height: "100vh",
		width: "100vw",
	};

    const clickMap = (map) => {
        // console.log("Map Clicked! ", map)
        setMarker({
            lat: map.latLng.lat(),
            lng: map.latLng.lng()
        })
        setDefaultCenter({})
        // console.log(marker)
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
			<LoadScript googleMapsApiKey="AIzaSyCcnBGHTqF4Kai6KgRfvSfyzS65Z0ZalNU">
				<GoogleMap
                    onClick={ clickMap }
					id="marker-example"
                    mapContainerStyle={
                        sWidth > 1200 ? mapStyle : mapStyleFull
                    }
					zoom={10}
					center={defaultCenter}
                    className="map"
				>
                    <MarkerF
                        position={marker}
                        >
                    </MarkerF>
				</GoogleMap>
			</LoadScript>
		</>
	);
};

export default Map;
