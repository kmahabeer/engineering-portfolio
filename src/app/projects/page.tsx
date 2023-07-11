import React from 'react';
import { fetchEngProjects } from '@/contentful/engProjects';
import { draftMode } from 'next/dist/client/components/headers';
import ProjectCard from '@/components/ProjectCard';

const page = async () => {
	const engPosts = await fetchEngProjects({ preview: draftMode().isEnabled });

	return (
		<section className='flex justify-between items-center flex-col lg:px-20 py-6 px-5 mb-16'>
			<section className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-10 w-full'>
				{engPosts.map((engPost) => {
					return (
						<ProjectCard
							key={engPost.slug}
							image={`/unsplash-01.jpg`}
							title={engPost.title}
							slug={engPost.slug}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default page;
