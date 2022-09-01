import { ReactComponent as ArrowUp } from '../assets/arrow_up.svg';
import { ReactComponent as Opensea } from '../assets/opensea.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Facebook } from '../assets/facebook.svg';
import { ReactComponent as Instagram } from '../assets/instagram.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as Netifily } from '../assets/netifily.svg';

import logo from "../assets/logo.png";
import footer_side from "../assets/footer_side.png";

const Footer = () => {
  	return (
		<>
			<div className="bg-[url('./footer_background.jpg')] pt-36 pb-24">
				<div className="container mx-auto grid grid-cols-5 gap-x-6">
					<div className="col-span-2">
						<img src={logo} alt="" />
						<p className="text-white/80 mt-11">Bithu is great solution for launch your NFT for minting. It uses a dictionary over 200 Latin words, combined with a handful.</p>
					</div>
					<div className="col-start-4 col-span-1">
						<h5 className="mb-11">Site map</h5>
						<ul>
							<li className="text-white/70 leading-[45px]"><a href="">Home</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">About</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">Roadmap</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">FAQ</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">Articles</a></li>
						</ul>
					</div>
					<div className="col-span-1">
						<h5 className="mb-11">Site map</h5>
						<ul>
							<li className="text-white/70 leading-[45px]"><a href="">Whitepaper</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">Terms Conditions</a></li>
							<li className="text-white/70 leading-[45px]"><a href="">Privacy Policy</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="relative bg-white/5">
				<div className="container mx-auto min-h-[100px] backdrop-blur-lg grid grid-cols-3 items-center justify-between">
					<span className="col-span-1">Copyright ©2022 Bithu, All rights reserved.</span>
					<a className="col-span-1 flex justify-center"><ArrowUp /></a>
					<div className="col-span-1 flex items-center justify-around">
						<Opensea />
						<Twitter />
						<Linkedin />
						<Facebook />
						<Instagram />
						<Telegram />
						<Netifily />
					</div>
				</div>

				<img className="absolute top-0 left-0 h-full" src={footer_side} alt="footer_side" />
				<img className="absolute top-0 right-0 rotate-180 h-full" src={footer_side} alt="footer_side" />
			</div>
		</>
	);
};

export default Footer;
