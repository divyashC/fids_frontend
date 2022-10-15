import React from "react";
import "../assets/css/flights.css";

export default function Flights() {
	const digitStyle = {
		fontSize: "60px",
		borderRadius: "20px",
	};

	const colonStyle = {
		fontSize: "60px",
	};

	const [currentTime, setCurrentTime] = React.useState(
		new Date().toLocaleTimeString()
	);

	const [hour, mins, seconds] = currentTime.split(":");
	const hoursInt = hour < 12 ? parseInt(hour) + 12 : hour;
	const hours = hoursInt.toString();

	React.useEffect(() => {
		setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<div className="container">
			<div class="time">
				<p style={digitStyle} class="digit">
					{hours[0]}
				</p>
				<p style={digitStyle} class="digit">
					{hours[1]}
				</p>
				<p style={colonStyle} class="colon">
					:
				</p>
				<p style={digitStyle} class="digit">
					{mins[0]}
				</p>
				<p style={digitStyle} class="digit">
					{mins[1]}
				</p>
				<p style={colonStyle} class="colon">
					:
				</p>
				<p style={digitStyle} class="digit">
					{seconds[0]}
				</p>
				<p style={digitStyle} class="digit">
					{seconds[1]}
				</p>
			</div>
		</div>
	);
}
