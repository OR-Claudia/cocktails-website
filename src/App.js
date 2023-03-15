import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import DrinkAlbum from "./components/drink-album/drink-album.component";
import { DrinksContext } from "./contexts/drinks.context";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import CocktailPage from "./routes/cocktail-page/cocktail-page.component";

const App = () => {
	const { drinks } = useContext(DrinksContext);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<DrinkAlbum drinkList={drinks} />} />
				<Route path="/:id" element={<CocktailPage />} />
			</Route>
		</Routes>
	);
};

export default App;
