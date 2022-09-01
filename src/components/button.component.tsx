import { ReactComponent as WhiteShape } from '../assets/white_shape.svg';
import { ReactComponent as BlackShape } from '../assets/black_shape.svg';

interface Props {
	border: string,
	height: string,
	width: string,
	color: string,
	backgroundColor: string,
	onClick: () => void,
	children?: React.ReactNode,
	black?: boolean
}

const Button: React.FC<Props> = ({
	border,
	height,
	width,
	color,
	backgroundColor,
	onClick,
	children,
	black
}: Props) => {
	return (
		<button
			onClick={onClick}
			className={`group relative text-center flex justify-center items-center uppercase font-bakbak overflow-hidden gap-2 before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:hover:w-full before:transition-all before:duration-300 ${black ? 'before:bg-black/10' : 'before:bg-white/20' }`}
			style={{
				backgroundColor: backgroundColor,
				border,
				height,
				width,
				color,
			}}
		>
			{black ? (
				<>
					<BlackShape className="absolute left-2 top-2" />
					<BlackShape className="absolute -right-full group-hover:right-2 transition-all duration-300 top-2 rotate-90" />
				</>
			) : (
				<>
					<WhiteShape className="absolute left-2 top-2" />
					<WhiteShape className="absolute -right-full group-hover:right-2 transition-all duration-300 top-2 rotate-90" />
				</>
			)}
			{children}
		</button>
	);
};

export default Button;
