import React from "react";
import MapsImage from "../assets/images/Maps.png";
import "../assets/css/routes.css";
import { Link } from "react-router-dom";

export default function FlightRoutes() {
	// const full = [
	// 	"Paro to Guwahati",
	// 	"Paro to Kolkata",
	// 	"Paro to Bagdogra",
	// 	"Paro to Dhaka",
	// 	"Paro to Kathmandu",
	// 	"Paro to Delhi",
	// 	"Paro to Bangkok",
	// 	"Paro to Singapore",
	// 	"Paro to Bumthang",
	// 	"Paro to Yonphula",
	// 	"Paro to Gaya",
	// 	"Paro to Gelephu",
	// ];

	// const iata = [
	// 	"PBH - GAU",
	// 	"PBH - CCU",
	// 	"PBH - IXB",
	// 	"PBH - DAC",
	// 	"PBH - KTM",
	// 	"PBH - DEL",
	// 	"PBH - BKK",
	// 	"PBH - SIN",
	// 	"PBH - BUM",
	// 	"PBH - YOM",
	// 	"PBH - GAY",
	// 	"PBH - GLU",
	// ];

	// const routes = full.map((item, index) => {
	// 	return { full: item, iata: iata[index] };
	// });

	const routes = {
		1: {
			full: "Paro to Guwahati",
			iata: "PBH - GAU",
		},
		2: {
			full: "Paro to Kolkata",
			iata: "PBH - CCU",
		},
		3: {
			full: "Paro to Bagdogra",
			iata: "PBH - IXB",
		},
		4: {
			full: "Paro to Dhaka",
			iata: "PBH - DAC",
		},
		5: {
			full: "Paro to Kathmandu",
			iata: "PBH - KTM",
		},
		6: {
			full: "Paro to Delhi",
			iata: "PBH - DEL",
		},
		7: {
			full: "Paro to Bangkok",
			iata: "PBH - BKK",
		},
		8: {
			full: "Paro to Singapore",
			iata: "PBH - SIN",
		},
		9: {
			full: "Paro to Bumthang",
			iata: "PBH - BUM",
		},
		10: {
			full: "Paro to Yonphula",
			iata: "PBH - YOM",
		},
		11: {
			full: "Paro to Gaya",
			iata: "PBH - GAY",
		},
		12: {
			full: "Paro to Gelephu",
			iata: "PBH - GLU",
		},
	};

	const routesArray = Object.keys(routes).map((key) => routes[key]);

	return (
		<div class="maps">
			{routesArray.map((item) => {
				return (
					<div class="card">
						<Link to="/routes">
							<div class="card-image">
								<img src={MapsImage} alt="Map" />
							</div>
							<div class="card_body">
								<h3>{item.iata}</h3>
								<p>{item.full}</p>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}
