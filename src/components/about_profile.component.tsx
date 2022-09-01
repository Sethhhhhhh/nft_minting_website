import about_avatar_01 from "../assets/about_avatar_01.png";
import certification from "../assets/certification.png";

const AboutProfile = () => {
  	return (
		<div className="p-4 w-fit bg-[#212027]">
			<img src={about_avatar_01} alt="about_avatar_01" />
			<h5 className="mt-5 text-2xl">
				Berneice Tran
				<img className="inline-block ml-3" src={certification} alt="certification" />
			</h5>
			<span className="opacity-70">Artist</span>
		</div>
	);
};

export default AboutProfile;
