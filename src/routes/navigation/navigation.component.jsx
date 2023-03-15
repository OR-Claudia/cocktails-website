import { Outlet } from "react-router-dom";
import DrinkAlbum from "../../components/drink-album/drink-album.component";

const Navigation = () => {
	const webTitle = "Cocktail database";
	return (
		<>
			<div className="cocktails-website-header">
				<div className="title-container">
					<h1>{webTitle}</h1>
				</div>
				{/* <DrinkAlbum drinkList={drinks} /> */}
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
