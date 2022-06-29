import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";
import "./css/all.min.css";
import "./css/footer.css";
import "./css/nav.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);