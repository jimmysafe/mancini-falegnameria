import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: process.env.STOREFRONT_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.CONTENTFUL_API_TOKEN}`,
		Accept: 'application/json',
	},
});

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
};

export default App;
