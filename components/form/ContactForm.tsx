import { FC, SyntheticEvent, useRef } from 'react';
import { BgColor, TextColor } from '../../enums';
import Button from '../layout/Button';
import Input from './Input';

const ContactForm: FC = () => {
	const firstNameRef = useRef<HTMLInputElement>(null);
	const lastNameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const telephoneRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLTextAreaElement>(null);

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		const data = {
			firstName: firstNameRef.current?.value,
			lastName: lastNameRef.current?.value,
			email: emailRef.current?.value,
			telephone: telephoneRef.current?.value,
			message: messageRef.current?.value,
		};

		console.log(data);
	};

	return (
		<form
			className='bg-white p-8 md:rounded-md rounded-none md:w-auto w-full md:my-32 my-20'
			onSubmit={handleSubmit}
		>
			{/* NOME COGNOME */}
			<div className='flex w-full md:flex-row flex-col'>
				<Input inputRef={firstNameRef} label='Nome' type='text' className='md:mr-2 mr-0' required />
				<Input
					inputRef={lastNameRef}
					label='Cognome'
					type='text'
					className='md:ml-2 ml-0 md:mt-0 mt-2'
					required
				/>
			</div>
			{/* EMAIL */}
			<Input inputRef={emailRef} label='Email' type='email' className='mt-2' required />
			{/* TEL */}
			<Input inputRef={telephoneRef} label='Telefono' type='text' className='mt-2' />
			{/* MESSAGGIO */}
			<Input
				textarea
				areaRef={messageRef}
				label='Messaggio'
				type='text'
				className='mt-2'
				required
			/>
			<div className='flex-1 flex justify-center items-center mt-6'>
				<Button bgColor={BgColor.BROWN} textColor={TextColor.LIGHT} text='invia' />
			</div>
		</form>
	);
};

export default ContactForm;
