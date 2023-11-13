import React from 'react';

type LocationPin = {
	text: string
	lng: number
	lat: number
}

const LocationPin = ({text}: LocationPin) => {
	return (
		<div>
			<i className="fa-solid fa-location-dot fs-1" />
			<p>{text}</p>
		</div>
	);
};

export default LocationPin;