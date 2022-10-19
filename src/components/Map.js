import React from "react";
import "../assets/css/map.css";
import pathVertical from "../assets/images/path_vertical.png";
import mapsLarge from "../assets/images/map_large.png";
import { useLocation } from "react-router-dom";

const Map = (props) => {
	{
		const location = useLocation();
		const state = location.state;

		return (
			<div>
				<div className="map_parent">
					<div class="map">
						<img class="map_img" src={mapsLarge} alt="Map" />
					</div>
					<div className="map_contents">
						<div className="maps_left">
							<img className="path_vertical" src={pathVertical} alt="Path" />
						</div>
						<div className="maps_right">
							<div className="maps_row1">
								<p className="map_label">Origin</p>
								<p className="map_origin">{state.origin}</p>
							</div>
							<div className="maps_row2">{state.duration}</div>
							<div className="maps_row3">
								<p className="map_label">Destination</p>
								<p className="map_destination">{state.destination}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default Map;
