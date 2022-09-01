import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./button.component";

import { ReactComponent as Discord } from '../assets/discord.svg';
import { ReactComponent as Wallet } from '../assets/wallet.svg';

const Navbar: React.FC = () => {
  	return (
		<div className="container mx-auto flex justify-between items-center p-6">
			<img src={logo} alt="logo" />
			<div className="flex gap-x-12 text-white font-bakbak uppercase">
				<Link className="font-bakbak duration-500 transition-colors hover:text-[#00FFA3]" to="#home">Home</Link>
				<Link className="font-bakbak duration-500 transition-colors hover:text-[#00FFA3]" to="#about">About</Link>
				<Link className="font-bakbak duration-500 transition-colors hover:text-[#00FFA3]" to="#roadmap">Roadmap</Link>
				<Link className="font-bakbak duration-500 transition-colors hover:text-[#00FFA3]" to="#team">Team</Link>
				<Link className="font-bakbak duration-500 transition-colors hover:text-[#00FFA3]" to="#faq">Faq</Link>
			</div>
			<div className="flex gap-5">
				<Button
					border="solid 2px rgba(255, 255, 255, 0.2)"
					height="50px"
					width="130px"
					color="white"
					backgroundColor="transparent"
					onClick={() => {}}
				>
					<Discord />
					Join
				</Button>
				<Button
					border="none"
					height="50px"
					width="160px"
					color="white"
					backgroundColor="rgba(255, 255, 255, 0.2)"
					onClick={() => {}}
				>
					<Wallet />
					Connect
				</Button>
			</div>
		</div>
	);
};

export default Navbar;
