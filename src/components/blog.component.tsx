interface Props {
	title: string,
	description: string,
	categories: string[],
	date: number,
	comments: number,
	image: string,
}

const Blog: React.FC<Props> = ({ title, description, categories, date, comments, image }:Props ) => {
  	const handleClick = () => {

	}
	
	return (
		<button
			className="text-left"
			onClick={handleClick}
		>
			<img src={image} alt="" />
			<div className="p-8 bg-[#11181e]">
				<div className="flex gap-x-2 mb-3">
					{categories.map((category) => (
						<span className="uppercase font-bakbak text-[#00FFA3]">{category}</span>
					))}
					<span className="font-bakbak text-white/70">{`. ${new Date(date)}`}</span>
				</div>
				<h4 className="mb-4">{title}</h4>
				<p className="mb-4 text-white/70">{description}</p>
			</div>

		</button>
	);
};

export default Blog;
