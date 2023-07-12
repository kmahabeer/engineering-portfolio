import { EngProject, fetchEngProject } from '@/contentful/engProjects';
import Link from 'next/link';
import { draftMode } from 'next/dist/client/components/headers';
import CloudinaryImage from './CloudinaryImage';

export interface EngProjectProps extends EngProject {
	image: string;
}

const ProjectCard = async ({ title, slug }: EngProjectProps) => {
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
		<div className='flex justify-center items-center flex-col rounded-xl drop-shadow'>
			<Link
				href={`/projects/${slug}`}
				className='flex justify-center items-center group relative w-full h-full'
			>
				<CloudinaryImage
					src={thumbnailUrl}
					alt={'Project image'}
					width={400}
					height={200}
					className='w-full h-full object-cover rounded-xl'
				/>
				<div className='hidden group-hover:flex project_card-title '>
					<p className='w-full'>{title}</p>
				</div>
			</Link>
		</div>
	);
};

export default ProjectCard;
