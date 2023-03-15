import "./home.styles.css";
import CocktailList from "../../components/drink-list/drink-list.component";

const Home = ({ drinkList }) => {
	return (
		<div className="drinks-container album py-5 bg-light">
			<CocktailList drinkList={drinkList} />
		</div>
	);
};

export default Home;
