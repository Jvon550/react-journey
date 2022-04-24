import { useState } from "react";
import bestbg from "../img/bestbg.jpg";
const Home = () => {
	// const [count, setCount] = useState(0);

	// const addCount = () => {
	// 	setCount(count + 1);
	// };
	// const minusCount = () => {
	// 	setCount(count - 1);
	// };
	const somestyle = {
		backgroundImage: `url(${bestbg})`,
		height: "500px",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return (
		<>
			<div className="hero" style={somestyle}>
				{/* <span>{count}</span>
			<button onClick={minusCount}>-</button>
			<button onClick={addCount}>+</button> */}
				<h1 style={{ color: "white" }}>
					This is my first react Project welcome
				</h1>
			</div>
			<div style={{ height: "100px" }}></div>
		</>
	);
};

export default Home;
