import {
	Banner,
	About,
	HowToMint,
	Roadmap,
	Team,
	Blogs
} from "./sections";
import Community from "./sections/community.section";
import Faq from "./sections/faq.section";
import Slider from "./sections/slider.section";

const Home: React.FC = () => {
  	return (
		<div className="flex flex-col gap-y-28">
			<Banner />
			<Slider />
			<About />
			<HowToMint />
			<Roadmap />
			<Team />
			<Faq />
			<Blogs />
			<Community />
		</div>
	);
};

export default Home;
