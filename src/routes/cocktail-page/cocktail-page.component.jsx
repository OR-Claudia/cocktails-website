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

	console.log(currentDrink);

	const {
		strDrink,
		strAlcoholic,
		strDrinkThumb,
		strGlass,
		strInstructions,
		strTags,
	} = currentDrink;

	const allIngredients = getIngredients(currentDrink);

	console.log(allIngredients);

	return (
		<div className="cocktail-page-container jumbotron p-4 p-md-5 text-white rounded bg-dark">
			<div className="card-container">
				<h2 className="cocktail-page-header">{strDrink}</h2>
				<br />
				<img src={strDrinkThumb} alt={strDrink} className="drink-image" />
				<div className="cocktail-information">
					<br />
					<p>Instructions</p>
					<span>{strInstructions}</span>
					<br />
					<p>Ingredients</p>
					{allIngredients.map((item, index) => {
						return (
							<li className="ingredients-list" key={index}>
								{`${item.measurement} ${item.ingredient}`}
							</li>
						);
					})}
					<p>Type of glass</p>
				</div>
			</div>
		</div>
	);
};

export default CocktailPage;
