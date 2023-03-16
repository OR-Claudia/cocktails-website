import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.css";

const Navigation = () => {
	const webTitle = "Cocktail database";
	return (
		<>
			<div className="cocktails-website-header jumbotron text-center">
				<div className="title-container">
					<Link style={{ textDecoration: "none" }} to="/">
						<h1 className="jumbotron-heading">{webTitle}</h1>
					</Link>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
