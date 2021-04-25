import { FC } from 'react';

const items = [
	{ name: 'Ambienti', link: '/ambienti' },
	{ name: 'Chi Siamo', link: 'chi-siamo' },
	{ name: 'Contatti', link: 'contatti' },
];

const NavItems: FC = () => {
	return (
		<div>
			{items.map((item) => (
				<span
					key={item.name}
					className='uppercase tracking-wider ml-6 cursor-pointer text-darkText font-primary text-xs font-medium'
				>
					{item.name}
				</span>
			))}
		</div>
	);
};

export default NavItems;
