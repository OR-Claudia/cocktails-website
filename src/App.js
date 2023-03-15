import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import DrinkAlbum from "./components/drink-album/drink-album.component";
import { DrinksContext } from "./contexts/drinks.context";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

const App = () => {
	const { drinks } = useContext(DrinksContext);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<DrinkAlbum drinkList={drinks} />} />
			</Route>
		</Routes>
	);
};

export default App;
