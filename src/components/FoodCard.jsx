import "./FoodCard.css";

const FoodCard = () => {
	return (
		<div className="card-container">
			<div className="image-container">
				<img src="https://picsum.photos/200/300" alt="food-pic" />
			</div>
			<div className="desc-container">
				<h2>Sate Ayam</h2>
				<h4>Rp.28000</h4>
			</div>
		</div>
	);
};

export default FoodCard;
