import Error from '../components/layout/Error';
import Loading from '../components/layout/Loading';
import { NextPage } from 'next';
import { useThumbnailsAmbientiQuery } from '../graphql/generated';
import GridAmbienti from 'components/homepage/GridAmbienti';

const Home: NextPage = () => {
	const { data, loading, error } = useThumbnailsAmbientiQuery();

	if (loading) return <Loading />;
	if (error) return <Error error={error} />;

	if (!data) return null;

	return <GridAmbienti data={data} />;
};

export default Home;
