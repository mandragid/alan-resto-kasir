import "./Navbar.css";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="container">
			<div className="header-nav">
				<img src={Logo} alt="resto-logo" />
				<h1>Alan Resto</h1>
			</div>
			<div className="navigation">
				<div className="nav-button">
					<Link to="/">
						<div className="food-button">
							<h2>Food</h2>
						</div>
					</Link>
					<Link to="/transaction">
						<div className="transaction-button">
							<h2>Transaksi</h2>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
