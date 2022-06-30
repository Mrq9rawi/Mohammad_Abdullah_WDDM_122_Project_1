import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div className="container">
			<Link className="logo" to="/Mohammad_Abdullah_WDDM_122_Project_1/">
				Mohammad Abdullah
			</Link>
			<nav>
				<ul>
					<li>
						<Link to="/Mohammad_Abdullah_WDDM_122_Project_1/">Home</Link>
					</li>
					<li>
						<Link to="/Mohammad_Abdullah_WDDM_122_Project_1/articles">Articles</Link>
					</li>
					<li>
						<Link to="/Mohammad_Abdullah_WDDM_122_Project_1/gallery">Gallery</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
