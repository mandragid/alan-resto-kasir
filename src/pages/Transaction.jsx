import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import "./Transaction.css";

const Transaction = () => {
	return (
		<div className="container">
			<Navbar />
			<div className="content-container">
				<div className="transaction-menu-container">
					<FoodCard />
					<FoodCard />
					<FoodCard />
				</div>
				<div className="transaction-container">
					<div className="transaction-header">
						<img src="https://img.icons8.com/?size=512&id=13229&format=png" alt="trans-logo" />
						<h3>Pesanan</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Transaction;
