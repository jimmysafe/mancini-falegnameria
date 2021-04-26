import { useRouter } from 'next/router';
import { FC } from 'react';

const items = [
	{ name: 'Ambienti', link: '/ambienti' },
	{ name: 'Chi Siamo', link: '/chi-siamo' },
	{ name: 'Contatti', link: '/contatti' },
];

const NavItems: FC = () => {
	const router = useRouter();
	return (
		<div className='md:block hidden'>
			{items.map((item) => (
				<span
					onClick={() => router.push(item.link)}
					key={item.name}
					className='uppercase tracking-wider ml-6 cursor-pointer text-darkText font-primary text-xs font-medium transform hover:text-white transition-all duration-300'
				>
					{item.name}
				</span>
			))}
		</div>
	);
};

export default NavItems;
