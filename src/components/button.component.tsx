import { ReactComponent as Square } from '../assets/button_square.svg';

interface Props {
	border: string,
	height: string,
	width: string,
	color: string,
	backgroundColor: string,
	onClick: () => void,
	children?: React.ReactNode,
}

const Button: React.FC<Props> = ({
	border,
	height,
	width,
	color,
	backgroundColor,
	onClick,
	children
}: Props) => {
	return (
		<button
			onClick={onClick}
			className="group relative text-center flex justify-center items-center uppercase font-bakbak overflow-hidden gap-2 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:hover:w-full before:-z-10 before:transition-all before:duration-300 before:bg-white/20"
			style={{
				backgroundColor: backgroundColor,
				border,
				height,
				width,
				color,
			}}
		>
			<Square className="absolute left-2 top-2" width={15} height={15} />
			<Square className="absolute -right-full group-hover:right-2 transition-all duration-300 top-2 rotate-90" width={15} height={15} />
			{children}
		</button>
	);
};

export default Button;
