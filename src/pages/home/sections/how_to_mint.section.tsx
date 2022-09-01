import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';

const steps = [
	{ text: "Connect Your Wallet", stroke: "[-webkit-text-stroke:1px_#00ffa3]" },
	{ text: "Select Your Quantity", stroke: "[-webkit-text-stroke:1px_#5865f2]" },
	{ text: "Confirm the Transaction", stroke: "[-webkit-text-stroke:1px_#ffe600]" },
	{ text: "Receive Your NFTs", stroke: "[-webkit-text-stroke:1px_#ff004c]" },
]

const HowToMint: React.FC = () => {
	return (
		<section className="container mx-auto">
			<h5 className="mb-4 text-[#00FFA3] uppercase">
				Easy steps
				<TitleShape className="inline-block ml-3 -mt-[1px]" />
			</h5>
			<h2 className="mb-12 uppercase">How to mint</h2>
			<ul className="flex">
				{steps.map((step, id) => (
					<li className="flex w-1/4 items-center">
						<h4 className={`text-8xl ${step.stroke} opacity-70 text-transparent leading-[140px]`}>{(id + 1)}</h4>
						<span className="ml-9 max-w-[150px] font-normal font-bakbak text-2xl">{step.text}</span>
					</li>
				))}
			</ul>
		</section>
	);
};

export default HowToMint;
