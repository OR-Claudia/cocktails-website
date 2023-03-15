import DrinkCard from "../drink-card/drink-card.component";

const CocktailList = ({ drinkList }) =>
	Object.values(drinkList).map((item) => {
		// console.log(item); - should print out full objects
		return <DrinkCard key={item.strDrink} cocktail={item} />;
	});

export default CocktailList;
