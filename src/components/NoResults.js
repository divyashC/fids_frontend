import React, { Component } from "react";
import "../assets/css/no_results.css";

export default class NoResults extends Component {
	render() {
		return (
			<div className="results_container">
				<div className="no_results">
					<p className="no_results_p">No Flights....</p>
				</div>
			</div>
		);
	}
}
