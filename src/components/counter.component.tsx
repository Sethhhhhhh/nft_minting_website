import { useState } from "react";

const Counter : React.FC = () => {
	const [counter, setCounter] = useState<number>(0);

	return (
		<div className="flex">
			<button
				className="w-[60px] h-[60px] text-center font-bold bg-white/10"
				onClick={() => setCounter(counter - 1)}
			>
				-
			</button>
			<span className="w-20 h-[60px] text-center leading-[60px] border-y-2 border-y-white/10">{counter}</span>
			<button
				className="w-[60px] h-[60px] text-center font-bold bg-white/10"
				onClick={() => setCounter(counter + 1)}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
