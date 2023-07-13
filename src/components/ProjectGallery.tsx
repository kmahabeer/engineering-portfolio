import { draftMode } from 'next/dist/client/components/headers';

import { fetchEngProjects, projectGalleryWidths } from '@/utils';
import { ProjectCard } from '@/components';

const ProjectGallery = async () => {
	const engPosts = await fetchEngProjects({ preview: draftMode().isEnabled });

	return (
		<div className='comic comic-grid'>
			{engPosts.map((engPost, index) => (
				<div
					key={engPost.slug}
					className={projectGalleryWidths[index % projectGalleryWidths.length]}
				>
					<ProjectCard
						key={engPost.slug}
						title={engPost.title}
						slug={engPost.slug}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
