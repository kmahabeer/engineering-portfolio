import { EngProject, fetchEngProject } from '@/utils';
import Link from 'next/link';
import { draftMode } from 'next/dist/client/components/headers';
import CloudinaryImage from './CloudinaryImage';

const ProjectCard = async ({ title, slug }: EngProject) => {
	const engPost = await fetchEngProject({
		slug: slug,
		preview: draftMode().isEnabled,
	});
	let thumbnailUrl: any = '';
	if (engPost?.thumbnail !== undefined) {
		thumbnailUrl = engPost?.thumbnail[0].url;
	} else {
		const { TEMP_COVER_IMAGE } = process.env;
		thumbnailUrl = TEMP_COVER_IMAGE;
	}

	return (
		<>
			<Link
				href={`/projects/${slug}`}
				className='flex justify-center items-center group relative w-full h-full'
			>
				<CloudinaryImage
					src={thumbnailUrl}
					alt={'Cover image for project entitled ' + title}
					width={400}
					height={200}
					className='w-full h-full object-cover'
				/>
				<div className='hidden group-hover:flex project_card-title '>
					<p className='w-full'>{title}</p>
				</div>
			</Link>
		</>
	);
};

export default ProjectCard;
