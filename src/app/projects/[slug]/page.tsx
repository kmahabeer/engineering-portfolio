import { fetchEngProject } from '@/utils';
import { draftMode } from 'next/dist/client/components/headers';
import { RichText } from '@/components';

// TODO: refactor ProjectGallery to return a React node component
// and not a Promise. Get rid of the await/await, separate the fetch
const page = async ({ params }: { params: { slug: string } }) => {
	const engPost = await fetchEngProject({
		slug: params.slug,
		preview: draftMode().isEnabled,
	});

	return (
		<div className='px-16 mt-8'>
			<h1 className='text-lg text-center font-semibold'>{engPost?.title}</h1>
			<div className='mx-auto sm:max-w-md md:max-w-xl lg:max-w-none'>
				<div>Published Date: {engPost?.publishedDate}</div>
				<RichText document={engPost?.content} />
			</div>
		</div>
	);
};

export default page;
