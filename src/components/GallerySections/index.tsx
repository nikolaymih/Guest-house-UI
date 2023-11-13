import React from 'react';
import {getAllImagesByGalType} from "../../utils/helpers";
import ImageGallery from "react-image-gallery";

import './styles.scss';

type GallerySectionType = {
	galleryType: string

	thumbnailPosition?: "left" | "top" | "right" | "bottom"
}

const GallerySection = ({galleryType, thumbnailPosition}: GallerySectionType) => {
	const [images, setImages] = React.useState<{original: string, thumbnail: string}[]>();

	React.useEffect(() => {
		const galleryTypeObjImages = getAllImagesByGalType(galleryType);

		setImages(galleryTypeObjImages);
	}, [galleryType])

	return (
		<section>
			{images && <ImageGallery items={images} thumbnailPosition={thumbnailPosition ? thumbnailPosition : 'bottom'} />}
		</section>
	);
};

export default GallerySection;