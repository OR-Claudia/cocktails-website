import { Outlet } from "react-router-dom";

const Navigation = () => {
	const webTitle = "Cocktail database";
	return (
		<>
			<div className="cocktails-website-header">
				<div className="title-container">
					<h1>{webTitle}</h1>
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
