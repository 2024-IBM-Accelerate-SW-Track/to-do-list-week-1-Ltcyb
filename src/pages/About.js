import React, { Component } from "react";
import "./About.css";
import pfp from "../assets/pfp.jpg";
export default class About extends Component {
	render() {
		return (
			<div>
				<div className="split left">
					<div className="centered">
						<img
							className="profile_image"
							src={pfp}
							alt="Profile Pic"
						/>
					</div>
				</div>
				<div className="split right">
					<div className="centered">
						<div className="name_title">Arnold Cai</div>
						<div className="brief_description">Hi, I'm Arnold.</div>
					</div>
				</div>
			</div>
		);
	}
}
