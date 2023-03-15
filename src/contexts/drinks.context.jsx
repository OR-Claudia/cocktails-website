import axios from "axios";
import { createContext, useState } from "react";

export const DrinksContext = createContext({
	drinks: [],
});

const cocktailURL =
	"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

export const DrinksProvider = ({ children }) => {
	const [drinks, setDrinks] = useState(async () => {
		const fetchData = async () =>
			await axios
				.get(cocktailURL)
				.then((res) => {
					if (res.data) {
						setDrinks(res.data.drinks);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		return fetchData();
	});

	const value = { drinks };

	return (
		<DrinksContext.Provider value={value}>{children}</DrinksContext.Provider>
	);
};
