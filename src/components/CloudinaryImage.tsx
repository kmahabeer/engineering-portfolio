'use client';
import { CldImageProps, CldImage } from 'next-cloudinary';

const CloudinaryImage = ({ src, alt, ...restProps }: CldImageProps) => {
	const { ...props } = restProps;
	return <CldImage src={src} alt={alt} {...props} />;
};

export default CloudinaryImage;
