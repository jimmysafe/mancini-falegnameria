import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { AiOutlineMail as Mail, AiOutlineMenu as Menu, AiOutlineClose as X } from 'react-icons/ai';

const items = [
	{ name: 'Ambienti', link: '/ambienti' },
	{ name: 'Chi Siamo', link: '/chi-siamo' },
	{ name: 'Contatti', link: '/contatti' },
];

const NavItems: FC = () => {
	const router = useRouter();
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [hideMenu, setHideMenu] = useState<boolean>(true);
	return (
		<>
			{/* desktop nav */}
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

			{/* mobile nav */}
			<div className='md:hidden block' onClick={() => router.push('/contatti')}>
				<Mail className='text-white w-6 h-6' />
			</div>
			<div
				className='md:hidden block'
				onClick={() => {
					setShowMenu(true);
					setHideMenu(false);
				}}
			>
				<Menu className='text-white w-6 h-6' />
			</div>

			{showMenu && (
				<div
					className='fixed top-8 right-4 z-50'
					onClick={() => {
						setShowMenu(false);
						setHideMenu(true);
					}}
				>
					<X className='text-white w-6 h-6' />
				</div>
			)}

			<div
				style={{ left: '100vw', animationFillMode: 'forwards' }}
				className={`fixed top-0 flex flex-col justify-center items-center w-screen h-screen z-40 bg-secondary text-white ${
					showMenu && 'animate-slideIn'
				} ${hideMenu && 'animate-slideOut'}`}
			>
				{items.map((item) => (
					<span
						onClick={() => {
							setShowMenu(false);
							setHideMenu(true);
							router.push(item.link);
						}}
						key={item.name}
						className='uppercase tracking-wider cursor-pointer text-darkText font-primary mb-4 font-medium transform hover:text-white transition-all duration-300'
					>
						{item.name}
					</span>
				))}
			</div>
		</>
	);
};

export default NavItems;
