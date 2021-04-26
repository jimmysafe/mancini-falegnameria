import { NextPage } from 'next';
import { Maybe, useAmbientiQuery } from '../graphql/generated';
import Error from '../components/layout/Error';
import Loading from '../components/layout/Loading';
import Slider from '../components/layout/Slider';

const AmbientiPage: NextPage = () => {
	const { data, loading, error } = useAmbientiQuery();
	if (loading) return <Loading />;
	if (error) return <Error error={error} />;
	if (!data) return null;

	return (
		<div>
			{data.ambienteCollection!.items.map((ambiente) => {
				const photos:
					| (Maybe<string> | undefined)[]
					| undefined = ambiente?.photosCollection?.items.map((item) => {
					return item?.url;
				});
				return (
					<div key={ambiente?.slug}>
						<Slider
							photos={photos ?? ['']}
							slug={ambiente?.slug ?? ''}
							title={ambiente?.title ?? ''}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default AmbientiPage;
