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
					className='uppercase tracking-wide ml-6 cursor-pointer text-dark font-primary text-sm'
				>
					{item.name}
				</span>
			))}
		</div>
	);
};

export default NavItems;