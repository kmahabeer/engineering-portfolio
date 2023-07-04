import { TypeEngineeringProjectsSkeleton } from './types';
import { Entry } from 'contentful';
import { Document as RichTextDocument } from '@contentful/rich-text-types';
import contentfulClient from './contentfulClient';

type EngProjectEntry = Entry<
	TypeEngineeringProjectsSkeleton,
	undefined,
	string
>;

interface EngProject {
	title: string;
	slug: string;
}

export function parseContentfulEngProject(
	engProjectEntry?: EngProjectEntry
): EngProject | null {
	if (!engProjectEntry) {
		return null;
	}
	return {
		title: engProjectEntry.fields.title || '',
		slug: engProjectEntry.fields.slug,
	};
}

interface FetchEngProjectOptions {
	slug?: string;
	preview: boolean;
}

export async function fetchEngProjects({
	preview,
}: FetchEngProjectOptions): Promise<EngProject[]> {
	const contentful = contentfulClient({ preview });

	const engProjectsResult =
		await contentful.getEntries<TypeEngineeringProjectsSkeleton>({
			content_type: 'engineeringProjects',
			include: 2,
			order: ['fields.title'],
		});

	return engProjectsResult.items.map(
		(EngProjectEntry) =>
			parseContentfulEngProject(EngProjectEntry) as EngProject
	);
}

export async function fetchEngProject({
	slug,
	preview,
}: FetchEngProjectOptions): Promise<EngProject | null> {
	const contentful = contentfulClient({ preview });

	const engProjectsResult =
		await contentful.getEntries<TypeEngineeringProjectsSkeleton>({
			content_type: 'engineeringProjects',
			'fields.slug': slug,
			include: 2,
		});

	return parseContentfulEngProject(engProjectsResult.items[0]);
}
