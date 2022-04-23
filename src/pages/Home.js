import { useState } from "react";

const Home = () => {
	const [count, setCount] = useState(0);

	const addCount = () => {
		setCount(count + 1);
	};
	const minusCount = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<span>{count}</span>
			<button onClick={minusCount}>-</button>
			<button onClick={addCount}>+</button>
		</div>
	);
};

export default Home;
