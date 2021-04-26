import ContactForm from 'components/form/ContactForm';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
	return (
		<div className='flex justify-center items-center'>
			<ContactForm />
		</div>
	);
};

export default ContactPage;
