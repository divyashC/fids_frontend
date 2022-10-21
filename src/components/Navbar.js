import React, { Component } from "react";
import logo from "../assets/images/logo.png";
import "../assets/css/navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Flights from "./Flights";
import FlightRoutes from "./FlightRoutes";
import Help from "./Help";
import Home from "./Home";
import Map from "./Map";
import Search from "./FlightSearch";
import SearchBar from "./SearchBar";
import DetailedSearch from "./DetailedSearch";

export default class Navbar extends Component {
	render() {
		return (
			<Router>
				<header>
					<Link class="logo" to="/">
						<img class="logo_img" src={logo} alt="FIDS" />
					</Link>
					<nav>
						<ul>
							<li>
								<Link class="link_effect" to="/">
									Home
								</Link>
							</li>
							<li>
								<Link class="link_effect" to="/flights">
									Flights
								</Link>
							</li>
							<li>
								<Link class="link_effect" to="/search">
									Search
								</Link>
							</li>
							<li>
								<Link class="link_effect" to="/routes">
									Routes
								</Link>
							</li>
							<li>
								<Link class="link_effect" to="/help">
									Help
								</Link>
							</li>
						</ul>
					</nav>
					<ul class="button" id="button">
						<li>
							<a
								href="https://localhost:7178/"
								target="_blank"
								class="admin_portal button _effect"
								rel="noopener noreferrer"
							>
								Admin
							</a>
							{/* <Link class="admin_portal button_effect" to="/home">
								Sign In
							</Link> */}
						</li>
					</ul>
				</header>

				<div className="switches">
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route path="/flights" element={<Flights />} />
						<Route path="/search" element={<Search />} />
						<Route path="/routes" element={<FlightRoutes />} />
						<Route path="/map" element={<Map />} />
						<Route path="/help" element={<Help />} />
						<Route path="/searchflights" element={<SearchBar />} />
						<Route path="/detailedSearch" element={<DetailedSearch />} />
					</Routes>
				</div>

				{/* <footer>
					<p>© 2022 - Flight Information Display System</p>
				</footer> */}
			</Router>
		);
	}
}
