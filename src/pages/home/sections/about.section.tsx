import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';

import AboutProfile from "../../../components/about_profile.component";

const About = () => {
	return (
		<section className="bg-[url('./about_background.png')] -mt-28 pt-28">
			<div className="container mx-auto flex gap-x-16">
				<div className="w-full flex flex-col">
					<h5 className="text-[#00FFA3] mb-4 uppercase">
						The story
						<TitleShape className="inline-block ml-3 -mt-[1px]" />
					</h5>
					<h2 className="mb-12 uppercase">About us</h2>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur cites of the word in classical literature.
						<br /><br />
						The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original a latin professor at Hampden-Sydney
					</p>
				</div>
				<div className="w-full flex flex-col">
					<h5 className="mb-8 uppercase">
						Meet the artists
						<TitleShape className="inline-block ml-3 -mt-[1px]" />
					</h5>
					<div className="flex gap-8">
						<AboutProfile />
						<AboutProfile />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
