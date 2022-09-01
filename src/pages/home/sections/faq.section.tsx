import { useState } from 'react';
import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';
import AccordionItem from '../../../components/accordion_item.compoment';

import faq_background from "../../../assets/faq_background.png";

const questions = [
	{
		question: "What is MiNFT ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		question: "How we can buy and invest NFT ?",
		answer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature."
	},
	{
		question: "Why we should choose MiNFT ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		question: "Where we can buy and sell NFts ?",
		answer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature."
	},
	{
		question: "How secure is this token ?",
		answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
	},
	{
		question: "What is your contract address ?",
		answer: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature."
	},
]

const Faq = () => {
	const [extendedItem, setExtendedItem] = useState<number>(0);

	const handleClick = (id: number) => {
		setExtendedItem(id);
	}

	return (
		<section className="relative container mx-auto flex">
			<div className="w-full z-10">
				<h5 className="text-[#00FFA3] mb-4 uppercase">
					Questions & answer
					<TitleShape className="inline-block ml-3 -mt-[1px]" />
				</h5>
				<h2 className="w-2/3 mb-12 uppercase">Frequently asked questions</h2>
				<div className="flex flex-col font-bakbak">
					<span>Don't get your answer?</span>
					<span>Fell free to leave a message, <a className="font-bakbak text-[#00FFA3]">Ask here!</a></span>
				</div>
			</div>
			<div className="w-full z-10 flex flex-col gap-y-3">
				{questions.map((question, id) => (
					<AccordionItem
						id={id}
						question={question.question}
						answer={question.answer}
						open={id !== extendedItem}
						onclick={() => handleClick(id)}
					/>
				))}
			</div>
			<img className="z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={faq_background} alt="" />
		</section>
	);
};

export default Faq;
