import { FC, useState } from 'react';
import SlickSlider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Maybe } from 'graphql/generated';
import Label from './Label';
import { BgColor, TextColor } from '../../enums';
import LightBox from './LightBox';

type SliderProps = {
	photos: (Maybe<string> | undefined)[] | undefined;
	slug: string;
	title: string;
};

const settings = {
	dots: false,
	infinite: false,
	autoplay: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
			},
		},
	],
};

const Slider: FC<SliderProps> = ({ photos, slug, title }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [photoIndex, setPhotoIndex] = useState<number>(0);
	return (
		<>
			<div className='mt-10 mb-20'>
				<div>
					<Label bgColor={BgColor.WHITE} textColor={TextColor.DARK} text={title} />
				</div>
				<SlickSlider {...settings}>
					{photos?.map((url, i) => (
						<div
							key={url}
							className='px-4 cursor-pointer'
							onClick={() => {
								setIsOpen(true);
								setPhotoIndex(i);
							}}
						>
							<img src={url ?? ''} alt={slug + i} className='rounded-md' />
						</div>
					))}
				</SlickSlider>
			</div>
			<LightBox
				setIsOpen={setIsOpen}
				isOpen={isOpen}
				photosUrls={photos}
				photoIndex={photoIndex}
				setPhotoIndex={setPhotoIndex}
			/>
		</>
	);
};

export default Slider;
