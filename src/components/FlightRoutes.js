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
			origin: "PBH - Paro",
			destination: "GAU - Guwahati",
			duration: "04 hrs 30 mins",
		},
		2: {
			full: "Paro to Kolkata",
			iata: "PBH - CCU",
			origin: "PBH - Paro",
			destination: "CCU - Kolkata",
			duration: "04 hrs 30 mins",
		},
		3: {
			full: "Paro to Bagdogra",
			iata: "PBH - IXB",
			origin: "PBH - Paro",
			destination: "IXB - Bagdogra",
			duration: "04 hrs 30 mins",
		},
		4: {
			full: "Paro to Dhaka",
			iata: "PBH - DAC",
			origin: "PBH - Paro",
			destination: "DAC - Dhaka",
			duration: "04 hrs 30 mins",
		},
		5: {
			full: "Paro to Kathmandu",
			iata: "PBH - KTM",
			origin: "PBH - Paro",
			destination: "KTM - Kathmandu",
			duration: "04 hrs 30 mins",
		},
		6: {
			full: "Paro to Delhi",
			iata: "PBH - DEL",
			origin: "PBH - Paro",
			destination: "DEL - Delhi",
			duration: "04 hrs 30 mins",
		},
		7: {
			full: "Paro to Bangkok",
			iata: "PBH - BKK",
			origin: "PBH - Paro",
			destination: "BKK - Bangkok",
			duration: "04 hrs 30 mins",
		},
		8: {
			full: "Paro to Singapore",
			iata: "PBH - SIN",
			origin: "PBH - Paro",
			destination: "SIN - Singapore",
			duration: "04 hrs 30 mins",
		},
		9: {
			full: "Paro to Bumthang",
			iata: "PBH - BUM",
			origin: "PBH - Paro",
			destination: "BUM - Bumthang",
			duration: "04 hrs 30 mins",
		},
		10: {
			full: "Paro to Yonphula",
			iata: "PBH - YON",
			origin: "PBH - Paro",
			destination: "YON - Yonphula",
			duration: "04 hrs 30 mins",
		},
		11: {
			full: "Paro to Gaya",
			iata: "PBH - GAY",
			origin: "PBH - Paro",
			destination: "GAY - Gaya",
			duration: "04 hrs 30 mins",
		},
		12: {
			full: "Paro to Gelephu",
			iata: "PBH - GLU",
			origin: "PBH - Paro",
			destination: "GLU - Gelephu",
			duration: "04 hrs 30 mins",
		},
	};

	const routesArray = Object.keys(routes).map((key) => routes[key]);

	return (
		<div class="maps">
			{routesArray.map((item) => {
				return (
					<div class="card">
						<Link to="/map" state={item}>
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
