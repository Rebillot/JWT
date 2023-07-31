import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom"; // Removed Navigate import

import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 bg-dark text-white">
			<h1>Welcome Stranger</h1>
			<p>
				<img src="https://www.meme-arsenal.com/memes/a4f841e234bbf15dc471c4f12d002d31.jpg" />
			</p>
			<Link to="/login">
				<button type="button" className="btn btn-primary btn-lg">
					Login
				</button>
			</Link>

			<Link to="/signup">
				<button type="button" className="btn btn-primary btn-lg">
					Sign up
				</button>
			</Link>

			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
		</div>
	);
};
