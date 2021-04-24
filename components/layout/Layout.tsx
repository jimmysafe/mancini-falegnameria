import Nav from '../header/Nav';
import { FC } from 'react';

const Layout: FC = ({ children }) => {
	return (
		<main>
			<header className='p-8'>
				<Nav />
			</header>
			{children}
		</main>
	);
};

export default Layout;
