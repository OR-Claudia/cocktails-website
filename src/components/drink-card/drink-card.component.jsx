import "./drink-card.styles.css";

const DrinkCard = ({ cocktail }) => {
	const { idDrink, strDrink, strDrinkThumb, strInstructions } = cocktail;
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
					<p className="drink-instructions">
						{strInstructions.length < 50
							? `${strInstructions}`
							: `${strInstructions.substring(0, 100)} ...`}
					</p>
					<button type="button" className="btn btn-primary btn-lg btn-block">
						Click for recipe
					</button>
				</div>
			</div>
		</div>
	);
};

export default DrinkCard;
