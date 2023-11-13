export const getAllImagesByGalType = (galleryType: string) => {
	const imagePaths: { path: string; }[] = [];

	const generateImageURL = (path: string) => {
		const url = new URL(path, import.meta.url);
		const data = {
			path: url.pathname,
		};
		imagePaths.push(data);
	}

	switch (galleryType) {
		case 'garden':
			// @ts-ignore
			Object.values(import.meta.glob("../../assets/images/gallery/garden/*.{jpg,png}", {eager: true})).forEach(({default: path}) => generateImageURL(path));
			break;
		case 'tavern':
			// @ts-ignore
			Object.values(import.meta.glob("../../assets/images/gallery/tavern/*.{jpg,png}", {eager: true})).forEach(({default: path}) => generateImageURL(path));
			break;
		case 'spa':
			// @ts-ignore
			Object.values(import.meta.glob("../../assets/images/gallery/spa/*.{jpg,png}", {eager: true})).forEach(({default: path}) => generateImageURL(path));
			break;
		case 'rooms':
			// @ts-ignore
			Object.values(import.meta.glob("../../assets/images/gallery/rooms/*.{jpg,png}", {eager: true})).forEach(({default: path}) => generateImageURL(path));
			break;
		case 'overview':
			// @ts-ignore
			Object.values(import.meta.glob("../../assets/images/gallery/overview/*.{jpg,png}", {eager: true})).forEach(({default: path}) => generateImageURL(path));
			break;
	}

	return imagePaths.map((url: { path: string }) => {
		return {
			original: url.path,
			thumbnail: url.path,
		}
	})
}