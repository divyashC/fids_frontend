import React from "react";
import "../assets/css/flight.css";
import Time from "./Time";
import FlightCard from "./FlightCard";

export default function Flights() {
	return (
		<div className="container">
			<Time />
			<FlightCard />
		</div>
	);
}
