import { ApolloError } from '@apollo/client';
import { FC } from 'react';

type ErrorProps = {
	error?: ApolloError;
};

const Error: FC<ErrorProps> = ({ error }) => {
	console.error(error);
	return <div>Error..</div>;
};

export default Error;
