import React from "react";
import { useState, useEffect } from "react";
import NoResults from "./NoResults";
import "../assets/css/searchbar.css";
import "../assets/css/flight_card.css";
import "../assets/css/detailed_search.css";
import PathImg from "../assets/images/path.png";
import DrukAir from "../assets/images/druk_air_logo.png";
import BhutanAirlines from "../assets/images/bhutan_airlines_logo.png";

export default function DetailedSearch() {
	var base = "https://localhost:7178/api/FlightAPI";
	var search = "https://localhost:7178/api/FlightAPI/search";
	var api = base;
	const [flightData, setFlightData] = useState([]);

	useEffect(() => {
		fetch(base)
			.then((response) => response.json())
			.then((data) => {
				setFlightData(data);
			});
	}, []);

	return (
		<div className="container">
			<div class="search">
				{/* <input
					type="text"
					placeholder="Search Flights..."
					onChange={(e) => {
						if (e.target.value === "") {
							api = base;
						} else {
							api = search + e.target.value;
						}
						fetch(api)
							.then((response) => response.json())
							.then((data) => {
								setFlightData(data);
							});
					}}
				/> */}
				{/* add search input for origin, destination and search button*/}
				<input type="text" placeholder="Origin" id="origin" />
				<input type="text" placeholder="Destination" id="destination" />
				{/* date selector */}
				<input type="date" id="date" />
				{/* input type submit and on submit fetch api */}
				<input
					type="submit"
					value="Search"
					onClick={(e) => {
						if (e.target.value === "") {
							api = base;
						} else {
							// api = search + e.target.value;
							api = `https://localhost:7178/api/FlightAPI/search/origin=${
								document.getElementById("origin").value
							}&destination=${
								document.getElementById("destination").value
							}&date=${document.getElementById("date").value}`;
						}
						fetch(api)
							.then((response) => response.json())
							.then((data) => {
								setFlightData(data);
							});
					}}
				/>
			</div>
			{flightData.map((flight) => (
				<div class="flight_details" key={flight.flightId}>
					<div class="flight_card">
						<div class="row1">
							<img
								id="flight_logo_placeholder"
								class="flight_logo"
								src={flight.airline === "Druk Air" ? DrukAir : BhutanAirlines}
								alt="Druk Air"
							/>
							<div class="flight_no">
								<p id="flight_no_placeholder">{flight.flightNo}</p>
							</div>
						</div>
						<div class="row2">
							<div class="flight_duration">
								<p id="flight_duration_placeholder">{flight.flightDuration}</p>
							</div>
						</div>
						<div class="row3">
							<div class="col1">
								<p id="departure_time_placeholder" class="departure_time">
									{flight.departureTime.substring(0, 5)}
								</p>
								<p id="origin_placeholder" class="origin">
									{flight.originIata} - {flight.origin}
								</p>
							</div>
							<div class="col2">
								<img src={PathImg} alt="Path" />
							</div>
							<div class="col3">
								<p id="arrival_time_placeholder" class="arrival_time">
									{flight.arrivalTime.substring(0, 5)}
								</p>
								<p id="destination_placeholder" class="destination">
									{flight.destinationIata} - {flight.destination}
								</p>
							</div>
						</div>
						<div class="row4">
							<p id="flight_date_placeholder">
								{flight.flightDate.substring(0, 10)}
							</p>
						</div>
						<hr />
						<div className="row5">
							<div class="row6">
								<div class="number">{flight.departureTerminal}</div>
								<div class="label">Departure Terminal</div>
							</div>
							<div class="row7">
								<div class="number">{flight.arrivalTerminal}</div>
								<div class="label">Arrival Terminal</div>
							</div>
						</div>
					</div>
				</div>
			))}
			{flightData.length === 0 && <NoResults />}
		</div>
	);
}
