import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';

import nft_01 from "../../../assets/nft_01.png";
import nft_02 from "../../../assets/nft_02.png";
import nft_03 from "../../../assets/nft_03.png";
import nft_04 from "../../../assets/nft_04.png";
import nft_05 from "../../../assets/nft_06.png";

const steps = [
	{
		pourcent: 10,
		title: "Launch The Website",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced.",
		image: nft_01
	},
	{
		pourcent: 20,
		title: "Giveaway to Holders",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced.",
		image: nft_02
	},
	{
		pourcent: 50,
		title: "Pre-sale Start",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced.",
		image: nft_03
	},
	{
		pourcent: 75,
		title: "Legendary Guest Artist Backgrounds",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced.",
		image: nft_04
	},
	{
		pourcent: 100,
		title: "Personalize Your NFT",
		description: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced.",
		image: nft_05
	}
]

const Roadmap: React.FC = () => {
	return (
		<section id="roadmap" className="container mx-auto">
			<h5 className="text-[#00FFA3] text-center mb-4 uppercase">
				<TitleShape className="rotate-180 inline-block mr-3 -mt-[1px]" />
				Our goals
				<TitleShape className="inline-block ml-3 -mt-[1px]" />
			</h5>
			<h2 className="text-center mb-12 uppercase">Roadmap</h2>
			<div className="flex flex-col gap-y-4">
				{steps.map((step) => (
					<div className="flex">
						<div className="w-64 p-4 bg-white/5">
							<span className="flex items-center justify-center font-bakbak w-full h-full text-[#343a3e] text-6xl bg-white/5">{` ${step.pourcent}%`}</span>
						</div>
						<div className="min-h-[200px] flex flex-col justify-center w-full p-4 bg-white/5">
							<div className="mb-4">
								<h4>{step.title}</h4>
							</div>
							<p className="opacity-80">{step.description}</p>
						</div>
						<div className="ml-5 p-10 w-[200px] flex items-center justify-center bg-[#11181e]">
							<img src={step.image} alt="" />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Roadmap;
