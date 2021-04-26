import { FC, RefObject } from 'react';

type InputProps = {
	label: string;
	className?: string;
	type: string;
	required?: boolean;
	textarea?: boolean;
	inputRef?: RefObject<HTMLInputElement>;
	areaRef?: RefObject<HTMLTextAreaElement>;
};

const Input: FC<InputProps> = ({
	label,
	className,
	type,
	required,
	textarea,
	inputRef,
	areaRef,
}) => {
	return (
		<div className={`flex flex-col w-full font-primary ${className}`}>
			<span className='text-secondary text-xs uppercase font-medium inline-block mb-1'>
				{label} {!required && '(Opzionale)'}
			</span>
			{!textarea ? (
				<input
					ref={inputRef}
					type={type}
					className='border-2 border-darkText border-opacity-20 rounded-sm  p-2 focus:border-primary transition-all duration-300 outline-none'
					required={required}
				/>
			) : (
				<textarea
					ref={areaRef}
					className='border-2 border-darkText border-opacity-20 rounded-sm  p-2 focus:border-primary transition-all duration-300 outline-none'
					cols={30}
					rows={5}
					required={required}
				></textarea>
			)}
		</div>
	);
};

export default Input;
