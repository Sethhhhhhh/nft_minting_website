import about_avatar_01 from "../assets/about_avatar_01.png";
import certification from "../assets/certification.png";

interface Props {
	name: string,
	role: string,
	image: string
}

const AboutProfile: React.FC<Props> = ({ name, role, image }:Props) => {
  	return (
		<div className="p-4 w-fit bg-[#212027]">
			<div className="overflow-hidden">
				<img className="object-cover duration-300 hover:scale-125 hover:rotate-12" src={image} alt="about_avatar_01" />
			</div>
			<h5 className="mt-5 text-2xl">
				{name}
				<img className="inline-block ml-3" src={certification} alt="certification" />
			</h5>
			<span className="opacity-70">{role}</span>
		</div>
	);
};

export default AboutProfile;
