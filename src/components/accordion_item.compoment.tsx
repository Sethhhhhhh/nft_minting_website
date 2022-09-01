import { useState } from 'react';

import { ReactComponent as Extend } from '../assets/extend.svg';
import { ReactComponent as Reduce } from '../assets/reduce.svg';

interface Props {
	id: number,
	question: string,
	answer: string,
	open: boolean,
	onclick: (id: number) => void
}

const AccordionItem: React.FC<Props> = ({ id, question, answer, open, onclick }:Props) => {
	return (
		<button
			onClick={() => onclick(id)}
			className="text-left py-6 px-7 bg-white/5 backdrop-blur-md"
		>
			<div className="flex items-center justify-between">
				<h4>{question}</h4>
				{open ? <Extend /> : <Reduce />}
			</div>
			<p className={`text-white/70 mt-6 ${!open ? 'block' : 'hidden'}`}>{answer}</p>
		</button>
	);
};

export default AccordionItem;
