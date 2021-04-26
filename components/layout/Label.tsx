import { FC } from 'react';
import { getTextColor, getBgColor } from '../../utils';
import { TextColor, BgColor } from '../../enums';

type LabelProps = {
	className?: string;
	bgColor: BgColor;
	textColor: TextColor;
	text: string;
};

const Label: FC<LabelProps> = ({ className, text, textColor, bgColor }) => {
	return (
		<div
			className={`inline-block font-primary font-medium tracking-widest uppercase text-sm mb-4 mx-4 px-4 py-1 rounded-sm ${getBgColor(
				bgColor
			)} ${getTextColor(textColor)} ${className}`}
		>
			<span>{text}</span>
		</div>
	);
};

export default Label;
