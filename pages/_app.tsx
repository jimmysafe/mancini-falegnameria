import { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '../components/layout/Layout';
import '../styles/compiled.css';

const client = new ApolloClient({
	uri: process.env.CONTENTFUL_API_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.CONTENTFUL_API_TOKEN}`,
		Accept: 'application/json',
	},
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ApolloProvider>
	);
};

export default App;
