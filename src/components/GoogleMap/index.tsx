import React from 'react';
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const defaultProps = {
	center: {
		lat: 43.494470,
		lng: 27.039641
	},
	zoom: 11,
	address: 'Къща Становец'
};
const GoogleMap = () => {
	return (
		<div style={{ height: '50vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{ key: import.meta.env.VITE_MAPS_KEY }}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<LocationPin
					lat={43.494470}
					lng={27.039641}
					text={defaultProps.address} />
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;