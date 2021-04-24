import Button from 'components/layout/Button';
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
		<nav className='relative flex justify-between items-center '>
			<Button text='Ciao belli' bgColor='brown' textColor='light' />
			<Logo />
			<NavItems />
		</nav>
	);
};

export default Nav;
