import React from 'react';
import { fetchEngProjects } from '@/contentful/engProjects';
import { draftMode } from 'next/dist/client/components/headers';
import Link from 'next/link';

const page = async () => {
	const engPosts = await fetchEngProjects({ preview: draftMode().isEnabled });
	return (
		<div>
			<h1>Here is the projects page.</h1>
			<ul>
				{engPosts.map((engPost) => {
					return (
						<li key={engPost.slug}>
							<Link href={`/${engPost.slug}`}>{engPost.title}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default page;
