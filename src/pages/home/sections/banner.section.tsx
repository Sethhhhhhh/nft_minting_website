import Button from "../../../components/button.component";
import Counter from "../../../components/counter.component";
import Timer from "../../../components/timer.component";

import banner_item_01 from "../../../assets/banner_item_01.png";
import banner_item_02 from "../../../assets/banner_item_02.png";
import banner_item_03 from "../../../assets/banner_item_03.png";
import banner_shape_01 from "../../../assets/banner_shape_01.png";
import banner_shape_02 from "../../../assets/banner_shape_02.png";
import banner_shape_03 from "../../../assets/banner_shape_03.png";

const Home = () => {
	return (
		<section className="bg-cover pt-40 pb-28 bg-[url('./banner.jpg')]">
			<div className="container mx-auto flex items-center">
				<div className="relative py-28 w-full">
					<span className="animate-spin-slow absolute top-[15%] w-20">
						<img src={banner_shape_01} alt="banner_shape_01" />
					</span>
					<span className="animate-spin-slow absolute top-[22%] left-[68%] w-10">
						<img src={banner_shape_02} alt="banner_shape_02" />
					</span>
					<span className="animate-spin-slow absolute top-[76%] left-[40%] w-16">
						<img src={banner_shape_03} alt="banner_shape_03" />
					</span>
					<img className="relative -top-6 z-30" src={banner_item_01} alt="banner_item_01" />
					<img className="absolute -left-14 bottom-10" src={banner_item_02} alt="banner_item_02" />
					<img className="absolute right-20 bottom-32 z-40" src={banner_item_03} alt="banner_item_03" />
				</div>
				<div className="w-full">
					<h4 className="mb-5 font-medium">WHITELIST : <span className="text-[#FF004C]">SOLDOUT</span></h4>
					<h1 className="mb-11">MINT IS LIVE NOW</h1>
					<h5>PUBLIC MINT END IN</h5>
					<Timer />
					<div className="flex mt-10 gap-7">
						<Counter />
						<Button
							black
							border="none"
							height="60px"
							width="200px"
							color="rgb(17, 17, 17)"
							backgroundColor="#00FFA3"
							onClick={() => {}}
						>
							Mint now
						</Button>
					</div>
					<div className="mt-14">
						<h5>PUBLIC MINT 0.09 ETH + GAS</h5>
						<h5>FLOOR PRICE 2.08 ETH</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
