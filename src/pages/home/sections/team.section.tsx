import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';
import { ReactComponent as BlackShape } from '../../../assets/black_shape.svg';
import { ReactComponent as Linkedin } from '../../../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../../../assets/twitter.svg';
import { ReactComponent as Instagram } from '../../../assets/instagram.svg';

import team_01 from "../../../assets/team_01.png";
import team_02 from "../../../assets/team_02.png";
import team_03 from "../../../assets/team_03.png";
import team_04 from "../../../assets/team_04.png";
import team_05 from "../../../assets/team_05.png";
import team_06 from "../../../assets/team_06.png";
import team_07 from "../../../assets/team_08.png";
import team_08 from "../../../assets/team_09.png";

const teams = [
	{
		name: "Berneice Tran",
		role: "Founder",
		img: team_01,
	},
	{
		name: "Nathan Bean",
		role: "Co-Founder",
		img: team_02,
	},
	{
		name: "Lynnette Wilkes",
		role: "Artist",
		img: team_03,
	},
	{
		name: "Claudia Hicks",
		role: "Co-Artist",
		img: team_04,
	},
	{
		name: "Moneo Doa",
		role: "UI Designer",
		img: team_05,
	},
	{
		name: "Tamsan Doe",
		role: "Software Engineer",
		img: team_06,
	},
	{
		name: "Sony Jina",
		role: "Blockchain Dev",
		img: team_07,
	},
	{
		name: "Natala Elon",
		role: "SEO Engineer",
		img: team_08,
	},
]

const Team: React.FC = () => {
	return (
		<section className="container mx-auto">
			<h5 className="text-[#00FFA3] text-center mb-4 uppercase">
				<TitleShape className="rotate-180 inline-block mr-3 -mt-[1px]" />
				Team members
				<TitleShape className="inline-block ml-3 -mt-[1px]" />
			</h5>
			<h2 className="text-center mb-12 uppercase">Meet the crew</h2>
			<div className="grid grid-cols-4 gap-x-6 gap-y-8">
				{teams.map((member) => (
					<div className="relative group col-span-1 flex flex-col items-center justify-center transition-colors bg-white/5 hover:bg-white/10 w-full h-[400px]">
						<img src={member.img} alt="" />
						<h3 className="mt-7 mb-1 text-2xl">{member.name}</h3>
						<span className="text-white/80">{member.role}</span>
						
						<BlackShape className="absolute top-2 left-2 transition-opacity opacity-0 group-hover:opacity-100" />
						<BlackShape className="absolute top-2 right-2 rotate-90 transition-opacity opacity-0 group-hover:opacity-100" />
						<ul className="absolute bottom-2 flex w-1/2 items-center justify-around transition-opacity opacity-0 group-hover:opacity-100">
							<li className="p-3 bg-[#0f181d]">
								<a href="/">
									<Linkedin />
								</a>
							</li>
							<li className="p-3 bg-[#0f181d]">
								<a href="/">
									<Twitter />
								</a>
							</li>
							<li className="p-3 bg-[#0f181d]">
								<a href="/">
									<Instagram />
								</a>
							</li>
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default Team;
