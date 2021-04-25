import { useState } from 'react';
import Error from 'components/layout/Error';
import Loading from 'components/layout/Loading';
import { useAmbienteQuery } from 'graphql/generated';
import { GetServerSideProps, NextPage } from 'next';
import Snuggle from 'react-snuggle';

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type AmbienteProps = {
	slug: string;
};

const Ambiente: NextPage<AmbienteProps> = ({ slug }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [photoIndex, setPhotoIndex] = useState<number>(0);

	const { data, loading, error } = useAmbienteQuery({ variables: { slug } });
	if (loading) return <Loading />;
	if (error) return <Error error={error} />;
	if (!data) return null;

	const photos = data.ambienteCollection?.items[0]?.photosCollection?.items;

	const photosUrls = photos?.map((photo) => photo?.url);

	return (
		<div className='mt-10'>
			<Snuggle>
				{photos?.map((photo, index) => (
					<div
						key={photo?.url}
						className='group relative cursor-pointer font-primary rounded-md overflow-hidden'
						onClick={() => {
							setIsOpen(true);
							setPhotoIndex(index);
						}}
					>
						<img
							className='rounded-md'
							src={photo?.url ? photo.url : ''}
							alt={photo?.title ? photo.title : ''}
						/>
						<div
							className='absolute -bottom-16 left-0 w-full opacity-0 bg-secondary text-darkText group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 p-4'
							style={{ minHeight: 100 }}
						>
							<p className='uppercase text-sm font-medium tracking-wide mb-4'>{photo?.title}</p>
							<p>{photo?.description}</p>
						</div>
					</div>
				))}
			</Snuggle>

			{isOpen && photosUrls && (
				<Lightbox
					mainSrc={photosUrls[photoIndex]!}
					nextSrc={photosUrls[(photoIndex + 1) % photosUrls.length]!}
					prevSrc={photosUrls[(photoIndex + photosUrls.length - 1) % photosUrls.length]!}
					onCloseRequest={() => setIsOpen(false)}
					onMovePrevRequest={() => {
						setPhotoIndex((photoIndex + photosUrls.length! - 1) % photosUrls.length);
					}}
					onMoveNextRequest={() => {
						setPhotoIndex((photoIndex + 1) % photosUrls!.length);
					}}
				/>
			)}
		</div>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const slug = params?.slug;
	return {
		props: {
			slug,
		},
	};
};

export default Ambiente;
