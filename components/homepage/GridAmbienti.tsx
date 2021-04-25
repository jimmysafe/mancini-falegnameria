import { ThumbnailsAmbientiQuery } from '../../graphql/generated';
import { FC } from 'react';
import Button from 'components/layout/Button';
import { useRouter } from 'next/router';

type GridProps = {
	data: ThumbnailsAmbientiQuery;
};

const GridAmbienti: FC<GridProps> = ({ data }) => {
	const router = useRouter();
	const gridItems = data.ambienteCollection?.items.map((item) => {
		return {
			title: item?.title,
			slug: item?.slug,
			image_url: item?.photosCollection?.items[0]?.url,
		};
	});

	return (
		<div className='flex-1 flex justify-center items-center'>
			<div className='flex flex-wrap w-full'>
				{gridItems?.map((item) => (
					<div
						onClick={() => router.push(`/ambiente/${item.slug}`)}
						key={item.slug}
						className='group shadow-md cursor-pointer flex justify-center items-center flex-1 bg-center bg-cover relative z-0 mx-4 rounded-md overflow-hidden transform hover:-translate-y-5 transition-all duration-300'
						style={{
							minHeight: 500,
							backgroundImage: `url('${item.image_url}')`,
						}}
					>
						<div
							className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300'
							style={{ zIndex: -1 }}
						></div>
						<Button
							text={item.title ? item.title : ''}
							textColor='dark'
							bgColor='white'
							onClick={() => router.push(`/ambiente/${item.slug}`)}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default GridAmbienti;
