import communityShape from "../../../assets/community_shape.png";
import Button from "../../../components/button.component";
import { ReactComponent as Discord } from '../../../assets/discord.svg';

import { ReactComponent as CommunityStar01 } from '../../../assets/community_star_01.svg';
import { ReactComponent as CommunityStar02 } from '../../../assets/community_star_02.svg';
import { ReactComponent as CommunityStar03 } from '../../../assets/community_star_03.svg';
import { ReactComponent as CommunityStar04 } from '../../../assets/community_star_04.svg';
import { ReactComponent as CommunityStar05 } from '../../../assets/community_star_05.svg';
import { ReactComponent as CommunityStar06 } from '../../../assets/community_star_06.svg';
import { ReactComponent as CommunityStar07 } from '../../../assets/community_star_07.svg';


const Community = () => {
	return (
		<section className="relative py-20 bg-[#10171d]">
			<div className="relative container mx-auto flex items-center justify-center gap-x-6">
				<h2 className="w-full">Join our community & get early access</h2>
				<div className="flex w-full gap-x-5">
					<Button
						black
						border="none"
						height="60px"
						width="220px"
						color="rgb(17, 17, 17)"
						backgroundColor="#00FFA3"
						onClick={() => {}}
					>
						Whitelist now
					</Button>
					<Button
						black
						border="none"
						height="60px"
						width="220px"
						color="white"
						backgroundColor="#5865F2"
						onClick={() => {}}
					>
						<Discord />
						Whitelist now
					</Button>
				</div>

				<CommunityStar01 className="animate-spin-slow absolute bottom-0 left-[27%]" />
				<CommunityStar02 className="animate-spin-slow absolute top-0 -right-[20%]" />
				<CommunityStar03 className="animate-spin-slow absolute bottom-2 right-0" />
				<CommunityStar04 className="animate-spin-slow absolute -bottom-10 -left-[10%]" />
				<CommunityStar05 className="animate-spin-slow absolute -top-12 left-[50%]" />
				<CommunityStar06 className="animate-spin-slow absolute -top-8 left-[10%]" />
				<CommunityStar07 className="animate-spin-slow absolute -top-4 -left-[20%]" />
			</div>
			
			<img
				className="absolute top-0 left-0"
				src={communityShape}
				alt=""
			/>
			<img
				className="absolute bottom-0 left-0"
				src={communityShape}
				alt=""
			/>
			<img
				className="absolute top-0 right-0"
				src={communityShape}
				alt=""
			/>
			<img
				className="absolute bottom-0 right-0"
				src={communityShape}
				alt=""
			/>
		</section>
	);
};

export default Community;
