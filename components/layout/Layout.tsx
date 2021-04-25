import Nav from '../header/Nav';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<main className='bg-tertiary flex flex-col min-h-screen'>
			<Nav />
			<section className='flex-1 flex flex-col container mx-auto'>{children}</section>
		</main>
	);
};

export default Layout;
