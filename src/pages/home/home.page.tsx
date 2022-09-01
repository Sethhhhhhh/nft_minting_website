import {
	Banner,
	About,
	HowToMint,
	Roadmap,
	Team,
	Blogs
} from "./sections";

const Home: React.FC = () => {
  	return (
		<div className="flex flex-col gap-y-28">
			<Banner />
			<About />
			<HowToMint />
			<Roadmap />
			<Team />
			<Blogs />
		</div>
	);
};

export default Home;
