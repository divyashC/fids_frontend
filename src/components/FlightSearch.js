import React, { Component } from "react";
import "../assets/css/flight_search.css";
import "../assets/css/flight_card.css";
import SearchBar from "./SearchBar";

export default class FlightSearch extends Component {
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}
