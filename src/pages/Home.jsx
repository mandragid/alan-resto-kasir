import Navbar from "../components/Navbar";
import FoodCard from "../components/FoodCard";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<div className="container">
				<Navbar />
				<div className="menu-container">
					<FoodCard />
					<FoodCard />
					<FoodCard />
				</div>
			</div>
		</div>
	);
};

export default Home;
