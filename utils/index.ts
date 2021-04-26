import { TextColor, BgColor } from '../enums';

export const getBgColor = (bgColor: string) => {
	switch (bgColor) {
		case BgColor.BROWN:
			return 'bg-primary';
		case BgColor.WHITE:
			return 'bg-white';
		case BgColor.DARK:
			return 'bg-secondary';
		default:
			return '';
	}
};

export const getTextColor = (textColor: string) => {
	switch (textColor) {
		case TextColor.DARK:
			return 'text-primary';
		case TextColor.LIGHT:
			return 'text-white';
		default:
			return 'text-primary';
	}
};
