import { useState } from "react";

const Timer: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<Date>(new Date());
	
	return (
		<div className="flex gap-2 text-4xl font-bakbak leading-[65px]">
			{currentTime.getDay()}
			<span className="text-white/20">:</span>
			{currentTime.getHours()}
			<span className="text-white/20">:</span>
			{currentTime.getMinutes()}
			<span className="text-white/20">:</span>
			{currentTime.getSeconds()}
		</div>
	);
};

export default Timer;
