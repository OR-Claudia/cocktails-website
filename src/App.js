import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import Home from "./routes/home/home.component";

const cocktailURL =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

const webTitle = "Cocktail database";

const App = () => {
	const [drinkList, setDrinkList] = useState(async () => {
		const fetchData = async () =>
			await axios
				.get(cocktailURL)
				.then((res) => {
					if (res.data) {
						setDrinkList(res.data.drinks);
					}
				})
				.catch((err) => {
					console.log(err);
				});

		return fetchData();
	});
	// const [isActive, setIsActive] = useState(false);
	// const [currentDrink, setCurrentDrink] = useState(null);

	console.log(drinkList);

	return (
		<div className="cocktails-website">
			<div className="title-container">
				<h1>{webTitle}</h1>
			</div>
			{drinkList.length > 0 ? <Home drinkList={drinkList} /> : null}
		</div>
	);
};

export default App;
