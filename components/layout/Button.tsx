import { FC } from 'react';
import { TextColor, BgColor } from '../../enums';
import { getBgColor, getTextColor } from '../../utils/index';

type ButtonProps = {
	bgColor: BgColor;
	textColor: TextColor;
	text: string;
	onClick?: () => void;
	className?: string;
};

const Button: FC<ButtonProps> = ({ bgColor, textColor, text, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`${getBgColor(bgColor)} ${getTextColor(
				textColor
			)} px-8 py-2 cursor-pointer uppercase font-primary text-xs font-medium tracking-wide rounded-sm ${className}`}
		>
			{text}
		</button>
	);
};

export default Button;
