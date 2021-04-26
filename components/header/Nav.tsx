import Button from '../layout/Button';
import { TextColor, BgColor } from '../../enums';
import { FC } from 'react';
import NavItems from './NavItems';
import { useRouter } from 'next/router';

const Logo: FC = () => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push('/')}
			className='absolute cursor-pointer'
			style={{
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<img src='/images/logo.png' alt='' className='w-32' />
		</div>
	);
};

const Nav: FC = () => {
	return (
		<header className='px-4 py-8 container mx-auto'>
			<nav className='relative flex justify-between items-center '>
				<Button
					text='Richiedi un Preventivo'
					bgColor={BgColor.BROWN}
					textColor={TextColor.LIGHT}
					className='md:block hidden hover:bg-white hover:text-secondary transition-all duration-300'
				/>
				<Logo />
				<NavItems />
			</nav>
		</header>
	);
};

export default Nav;
