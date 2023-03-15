import DrinkCard from "../drink-card/drink-card.component";

const CocktailList = ({ drinkList }) =>
	Object.values(drinkList).map((item) => {
		return <DrinkCard key={item.strDrink} cocktail={item} />;
	});

export default CocktailList;
