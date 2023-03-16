import "./drink-card.styles.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentDrinkContext } from "../../contexts/currentDrink.context";

const DrinkCard = ({ cocktail }) => {
	const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktail;
	const { setCurrentDrink } = useContext(CurrentDrinkContext);

	const navigate = useNavigate();

	const handleClick = () => {
		setCurrentDrink(cocktail);
		navigate(idDrink);
	};

	return (
		<div className="col-md-11">
			<div className="card box-shadow">
				<div className="card-body">
					<h3 className="drink-card-name">{strDrink}</h3>
					<img
						src={strDrinkThumb}
						alt={strDrink}
						className="drink-card-photo"
					/>
					<br />
					<p className="drink-instructions">
						{strInstructions.length < 50
							? `${strInstructions}`
							: `${strInstructions.substring(0, 100)} ...`}
					</p>
					<button
						type="button"
						className="btn btn-primary btn-md btn-block"
						onClick={handleClick}
					>
						Click for recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default DrinkCard;
