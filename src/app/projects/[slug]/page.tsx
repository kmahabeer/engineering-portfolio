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
			<div className='richtext mx-auto sm:max-w-none md:max-w-xl lg:max-w-none'>
				<h2>{engPost?.title}</h2>
				<p>{engPost?.publishedDate}</p>
				<RichText document={engPost?.content} />
			</div>
	);
};

export default page;
