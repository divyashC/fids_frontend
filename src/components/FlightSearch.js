import React from "react";
import "../assets/css/flight_search.css";
import { Link } from "react-router-dom";
import TodayImage from "../assets/images/today.png";
import UpcomingImage from "../assets/images/upcoming.png";
import DetailedSearch from "../assets/images/detailed.png";

export default function FlightSearch() {
	const apis = {
		upcoming: {
			base: "https://localhost:7178/api/FlightAPI",
			search: "https://localhost:7178/api/FlightAPI/search/",
		},
		today: {
			base: "https://localhost:7178/api/FlightAPI/today",
			search: "https://localhost:7178/api/FlightAPI/search/today/",
		},
	};
	return (
		<div>
			<div className="buttons">
				<div class="card">
					<Link to="/detailedSearch">
						<div class="card-image">
							<img src={DetailedSearch} alt="Map" />
						</div>
						<div class="card_body">
							<h3>Detailed Search</h3>
							<p>Origin | Destination | Date</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/searchflights" state={apis.today}>
						<div class="card-image">
							<img src={TodayImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>Today's Flights</h3>
							<p>Origin | Destination</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/searchflights" state={apis.upcoming}>
						<div class="card-image">
							<img src={UpcomingImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>Upcoming Flights</h3>
							<p>Origin | Destination</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
