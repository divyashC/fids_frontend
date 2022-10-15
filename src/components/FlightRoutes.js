import React, { Component } from "react";
import MapsImage from "../assets/images/Maps.png";
import "../assets/css/routes.css";
import { Link } from "react-router-dom";

export default class FlightRoutes extends Component {
	render() {
		return (
			<div class="maps">
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - BKK</h3>
							<p>Paro to Bangkok</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - GAU</h3>
							<p>Paro to Guwahati</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - CCU</h3>
							<p>Paro to Kolkata</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - IXB</h3>
							<p>Paro to Bagdogra</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - DAC</h3>
							<p>Paro to Dhaka</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - KTM</h3>
							<p>Paro to Kathmandu</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - DEL</h3>
							<p>Paro to Delhi</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - BKK</h3>
							<p>Paro to Bangkok</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - SIN</h3>
							<p>Paro to Singapore</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - BUM</h3>
							<p>Paro to Bumthang</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - YON</h3>
							<p>Paro to Yonphula</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - GAY</h3>
							<p>Paro to GAYA</p>
						</div>
					</Link>
				</div>
				<div class="card">
					<Link to="/routes">
						<div class="card-image">
							<img src={MapsImage} alt="Map" />
						</div>
						<div class="card_body">
							<h3>PBH - GLU</h3>
							<p>Paro to Gelephu</p>
						</div>
					</Link>
				</div>
			</div>
		);
	}
}
