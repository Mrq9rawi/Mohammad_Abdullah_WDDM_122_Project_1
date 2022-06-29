import React from "react";
import homeImage from "../img/landing-image.png";
import "../css/modules/home.modules.css";

export default function Home() {
	return (
		<section class="landing">
			<div class="container">
				<div class="content">
					<h1>Welcome, To My World</h1>
					<p>
						Here Iam gonna share with you things that matter fo me. Books I read, Games I Play,
						Stories and Events
					</p>
				</div>
				<img src={homeImage} alt="" />
			</div>
		</section>
	);
}
