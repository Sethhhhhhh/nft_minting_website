import Blog from '../../../components/blog.component';

import { ReactComponent as TitleShape } from '../../../assets/title_shape.svg';

import blog_article_01 from "../../../assets/blog_article_01.png";
import blog_article_02 from "../../../assets/blog_article_02.png";
import blog_article_03 from "../../../assets/blog_article_03.png";

const blogs = [
	{
		title: "How to Create Your 1st Crypto NFTs",
		description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
		categories: ["nft"],
		date: 1661988889,
		comments: 5,
		image: blog_article_01
	},
	{
		title: "The New World is All about Metaverse",
		description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
		categories: ["gaming"],
		date: 1661988928,
		comments: 5,
		image: blog_article_02
	},
	{
		title: "It’s the Great Chance to Invest in NFT",
		description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled",
		categories: ["metaverse", "nft"],
		date: 1661988983,
		comments: 5,
		image: blog_article_03
	},
];

const Blogs = () => {
	return (
		<section className="container mx-auto">
			<h5 className="text-[#00FFA3] mb-4 uppercase">
				Latest articles
				<TitleShape className="inline-block ml-3 -mt-[1px]" />
			</h5>
			<h2 className="mb-12 uppercase">Blog post</h2>
			<div className="grid grid-cols-3 gap-x-6 gap-y-7">
				{blogs.map((blog) => (
					<Blog
						title={blog.title}
						description={blog.description}
						categories={blog.categories}
						date={blog.date}
						comments={blog.comments}
						image={blog.image}
					/>
				))}
			</div>
		</section>
	);
};

export default Blogs;
