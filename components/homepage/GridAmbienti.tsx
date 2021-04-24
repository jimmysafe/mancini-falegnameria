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

	console.log(gridItems);
	return (
		<div className='flex flex-wrap'>
			{gridItems?.map((item) => (
				<div
					key={item.slug}
					className='flex justify-center items-center w-1/2 bg-center bg-cover relative z-0'
					style={{
						minHeight: 500,
						backgroundImage: `url('${item.image_url}')`,
					}}
				>
					<div
						className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-25'
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
	);
};

export default GridAmbienti;
