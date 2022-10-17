import React from "react";
import "../assets/css/time.css";

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
	var hours = ((hour < 12 ? "AM" : "PM") === "PM"
		? parseInt(hour) + 12
		: hour
	).toString();
	hours = hours.length === 1 ? "0" + hours : hours;

	React.useEffect(() => {
		setInterval(() => {
			setCurrentTime(new Date().toLocaleTimeString());
		}, 1000);
	}, []);

	return (
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
	);
}
