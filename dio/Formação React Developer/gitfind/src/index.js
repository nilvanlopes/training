import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App";
import "./styles.css";
import { UserProvider } from "./pages/Home/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<UserProvider>
			<App />
		</UserProvider>
	</React.StrictMode>
);
