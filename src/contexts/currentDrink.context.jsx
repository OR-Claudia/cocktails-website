import { createContext, useState } from "react";

const defaultDrink = {};

export const CurrentDrinkContext = createContext({
	setCurrentDrink: () => null,
	currentDrink: null,
});

export const CurrentDrinkProvider = ({ children }) => {
	const [currentDrink, setCurrentDrink] = useState(defaultDrink);

	const value = { currentDrink, setCurrentDrink };

	return (
		<CurrentDrinkContext.Provider value={value}>
			{children}
		</CurrentDrinkContext.Provider>
	);
};
