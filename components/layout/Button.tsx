import { FC } from 'react';

type ButtonProps = {
	bgColor: string;
	textColor: string;
	text: string;
	onClick?: () => void;
};

const getBgColor = (bgColor: string) => {
	switch (bgColor) {
		case 'brown':
			return 'bg-primary';
		case 'white':
			return 'bg-white';
		case 'grey':
			return 'bg-secondary';
		default:
			return '';
	}
};

const getTextColor = (textColor: string) => {
	switch (textColor) {
		case 'dark':
			return 'text-primary';
		case 'light':
			return 'text-white';
		default:
			return 'text-primary';
	}
};

const Button: FC<ButtonProps> = ({ bgColor, textColor, text, onClick }) => {
	return (
		<div
			onClick={onClick}
			className={`${getBgColor(bgColor)} ${getTextColor(
				textColor
			)} px-8 py-2 cursor-pointer uppercase font-primary text-xs font-medium tracking-wide`}
		>
			{text}
		</div>
	);
};

export default Button;
