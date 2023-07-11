import { EngProject } from '@/contentful/engProjects';
import Link from 'next/link';
import Image from 'next/image';

export interface EngProjectProps extends EngProject {
	image: string;
}

const ProjectCard = ({ title, slug, image }: EngProjectProps) => {
	return (
		<div className='flex justify-center items-center flex-col rounded-xl drop-shadow'>
			<Link
				href={`/projects/${slug}`}
				className='flex justify-center items-center group relative w-full h-full'
			>
				<Image
					src={image}
					alt='Project image'
					width={300}
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
