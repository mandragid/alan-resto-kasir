import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Transaction from "./pages/Transaction";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/transaction" element={<Transaction />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
