import { useState, useEffect } from "react";
import React from "react";
import NoResults from "./NoResults";
import "../assets/css/flight_card.css";
import PathImg from "../assets/images/path.png";
import DrukAir from "../assets/images/druk_air_logo.png";
import BhutanAirlines from "../assets/images/bhutan_airlines_logo.png";

function API() {
	var [flightData, setFlightData] = useState([]);

	useEffect(() => {
		fetch("https://localhost:7178/api/FlightAPI")
			.then((response) => response.json())
			.then((data) => {
				setFlightData(data);
			});
	}, []);

	const filteredData = flightData.filter(
		(flight) => new Date(flight.flightDate) >= new Date()
	);

	const todaysFlights = flightData.filter(
		(flight) =>
			new Date(flight.flightDate).toDateString() === new Date().toDateString()
	);

	flightData = filteredData.concat(todaysFlights);

	return (
		<div className="API">
			{flightData.map((flight) => (
				<div class="flight_details">
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

	// const [isOpen, setIsOpen] = useState(false);
	// return (
	// 	<div className="API">
	// 		{flightData.map((flight) => (
	// 			<div class="flight_details">
	// 				<div class="flight_card">
	// 					<div class="row1">
	// 						<img
	// 							id="flight_logo_placeholder"
	// 							class="flight_logo"
	// 							src={flight.airline == "Druk Air" ? DrukAir : BhutanAirlines}
	// 							alt="Druk Air"
	// 						/>
	// 						<div class="flight_no">
	// 							<p id="flight_no_placeholder">{flight.flightNo}</p>
	// 						</div>
	// 					</div>
	// 					<div class="row2">
	// 						<div class="flight_duration">
	// 							<p id="flight_duration_placeholder">{flight.flightDuration}</p>
	// 						</div>
	// 					</div>
	// 					<div class="row3">
	// 						<div class="col1">
	// 							<p id="departure_time_placeholder" class="departure_time">
	// 								{flight.departureTime}
	// 							</p>
	// 							<p id="origin_placeholder" class="origin">
	// 								{flight.originIata} - {flight.origin}
	// 							</p>
	// 						</div>
	// 						<div class="col2">
	// 							<img src={PathImg} alt="Path" />
	// 						</div>
	// 						<div class="col3">
	// 							<p id="arrival_time_placeholder" class="arrival_time">
	// 								{flight.arrivalTime}
	// 							</p>
	// 							<p id="destination_placeholder" class="destination">
	// 								{flight.destinationIata} - {flight.destination}
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div class="row4">
	// 						<p id="flight_date_placeholder">{flight.flightDate}</p>
	// 					</div>
	// 					{!isOpen && (
	// 						<div class="row5">
	// 							<i
	// 								onClick={() => setIsOpen(!isOpen)}
	// 								class=" dot bi bi-three-dots"
	// 							></i>
	// 						</div>
	// 					)}
	// 					{isOpen && (
	// 						<div>
	// 							<hr />
	// 							<div class="row6">
	// 								<div class="number">{flight.departureTerminal}</div>
	// 								<div class="label">Departure Terminal</div>
	// 							</div>
	// 							<div class="row7">
	// 								<div class="number">{flight.arrivalTerminal}</div>
	// 								<div class="label">Arrival Terminal</div>
	// 							</div>
	// 							<div class="row8">
	// 								<i
	// 									onClick={() => setIsOpen(!isOpen)}
	// 									class="arr bi bi-arrow-up-circle"
	// 								></i>
	// 							</div>
	// 						</div>
	// 					)}
	// 				</div>
	// 			</div>
	// 		))}
	// 	</div>
	// );
}

export default API;
