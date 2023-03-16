import "./drink-album.styles.css";
import CocktailList from "../drink-list/drink-list.component";

const DrinkAlbum = ({ drinkList }) => {
	return (
		<div className="drinks-container album py-5 bg-dark rounded">
			<CocktailList drinkList={drinkList} />
		</div>
	);
};

export default DrinkAlbum;
