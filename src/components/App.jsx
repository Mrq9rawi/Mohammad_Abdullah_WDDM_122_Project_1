import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "../pages/Home";
import Articles from "../pages/Articles";
import Gallery from "../pages/Gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<header>
					<Nav />
				</header>
				<main>
					<Routes>
						<Route path="/Mohammad_Abdullah_WDDM_122_Project_1/" element={<Home />} />
						<Route path="/Mohammad_Abdullah_WDDM_122_Project_1/articles" element={<Articles />} />
						<Route path="/Mohammad_Abdullah_WDDM_122_Project_1/gallery" element={<Gallery />} />
					</Routes>
				</main>
				<footer>
					<Footer />
				</footer>
			</BrowserRouter>
		</>
	);
}
