import React from "react";
import { useState } from "react";
import "../assets/css/flight_card.css";
import PathImg from "../assets/images/path.png";
import DrukAir from "../assets/images/druk_air_logo.png";
// import BhutanAirlines from "../assets/images/bhutan_airlines_logo.png";

export default function Flights() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div class="flight_details">
			<div class="flight_card">
				<div class="row1">
					<img
						id="flight_logo_placeholder"
						class="flight_logo"
						src={DrukAir}
						alt="Druk Air"
					/>
					<div class="flight_no">
						<p id="flight_no_placeholder">KB150</p>
					</div>
				</div>
				<div class="row2">
					<div class="flight_duration">
						<p id="flight_duration_placeholder">04 hr 10min</p>
					</div>
				</div>
				<div class="row3">
					<div class="col1">
						<p id="departure_time_placeholder" class="departure_time">
							0830
						</p>
						<p id="origin_placeholder" class="origin">
							PBH - Paro
						</p>
					</div>
					<div class="col2">
						<img src={PathImg} alt="Path" />
					</div>
					<div class="col3">
						<p id="arrival_time_placeholder" class="arrival_time">
							1240
						</p>
						<p id="destination_placeholder" class="destination">
							BKK - Bangkok
						</p>
					</div>
				</div>
				<div class="row4">
					<p id="flight_date_placeholder">14 - 09 - 2022</p>
				</div>
				{!isOpen && (
					<div class="row5">
						<i
							onClick={() => setIsOpen(!isOpen)}
							class=" dot bi bi-three-dots"
						></i>
					</div>
				)}
				{isOpen && (
					<div>
						<hr />
						<div class="row6">
							<div class="number">1</div>
							<div class="label">Departure Terminal</div>
						</div>
						<div class="row7">
							<div class="number">5</div>
							<div class="label">Arrival Terminal</div>
						</div>
						<div class="row8">
							<i
								onClick={() => setIsOpen(!isOpen)}
								class="arr bi bi-arrow-up-circle"
							></i>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
