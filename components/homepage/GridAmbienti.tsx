import { ThumbnailsAmbientiQuery } from '../../graphql/generated';
import { FC } from 'react';
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
		<div className='flex-1 flex justify-center items-start flex-col'>
			<div className='flex flex-wrap w-full md:flex-row flex-col'>
				{gridItems?.map((item) => (
					<div
						key={item.slug}
						className='md:my-0 my-10 group flex flex-col flex-1 transform hover:-translate-y-5 transition-all duration-300'
					>
						<p className='mx-4 mb-3 text-primary font-primary uppercase font-medium tracking-wider text-xs'>
							{item.title}
						</p>

						<div
							onClick={() => router.push(`/ambiente/${item.slug}`)}
							className='relative shadow-md cursor-pointer flex justify-center items-center bg-center bg-cover z-0 mx-4 rounded-md overflow-hidden'
							style={{
								minHeight: 500,
								backgroundImage: `url('${item.image_url}')`,
							}}
						>
							<div
								className='absolute top-0 left-0 bg-black w-full h-full bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300'
								style={{ zIndex: -1 }}
							></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GridAmbienti;
