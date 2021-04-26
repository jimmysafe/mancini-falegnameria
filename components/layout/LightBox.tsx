import { Maybe } from 'graphql/generated';
import { Dispatch, FC, SetStateAction } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

type LightBoxProps = {
	photosUrls: (Maybe<string> | undefined)[] | undefined;
	photoIndex: number;
	setPhotoIndex: Dispatch<SetStateAction<number>>;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const LightBox: FC<LightBoxProps> = ({
	photosUrls,
	photoIndex,
	isOpen,
	setIsOpen,
	setPhotoIndex,
}) => {
	return (
		<>
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
		</>
	);
};

export default LightBox;
