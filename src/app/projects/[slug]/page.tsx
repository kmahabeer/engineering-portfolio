import { fetchEngProject } from '@/contentful/engProjects';
import { draftMode } from 'next/dist/client/components/headers';
import React from 'react';
import RichText from '@/components/RichText';

const page = async ({ params }: { params: { slug: string } }) => {
	const engPost = await fetchEngProject({
		slug: params.slug,
		preview: draftMode().isEnabled,
	});

	return (
		<div className='px-4 mx-auto lg:max-w-5xl'>
			<div className='flex-none justify-center items-center mx-10'>
				<h1 className='text-lg text-center font-semibold'>{engPost?.title}</h1>
				<div className='divide-x-[3px] text-center'>***</div>
				<div className='mx-auto prose sm:max-w-md md:max-w-lg lg:max-w-none'>
					<div>Published Date: {engPost?.publishedDate}</div>
					<RichText document={engPost?.content} />
				</div>
			</div>
		</div>
	);
};

export default page;
