import { useContext } from "react";
import { CurrentDrinkContext } from "../../contexts/currentDrink.context";

import "./cocktail-page.styles.css";

const getIngredients = (cocktail) => {
	var ingredientsArray = [];
	var ingredientObj = {};

	for (var i = 1; i < 15; i++) {
		var ingredient = `strIngredient${i}`;
		var measurement = `strMeasure${i}`;

		ingredientObj = {
			ingredient: cocktail[ingredient],
			measurement: cocktail[measurement],
		};

		ingredientsArray.push(ingredientObj);
	}
	return ingredientsArray.filter(({ ingredient }) => ingredient !== null);
};

const CocktailPage = () => {
	const { currentDrink } = useContext(CurrentDrinkContext);

	const {
		strDrink,
		strAlcoholic,
		strDrinkThumb,
		strGlass,
		strInstructions,
		strTags,
	} = currentDrink;

	const allIngredients = getIngredients(currentDrink);

	return (
		<div className="cocktail-page-container">
			<h2 className="cocktail-page-header">{strDrink}</h2>
		</div>
	);
};

export default CocktailPage;
