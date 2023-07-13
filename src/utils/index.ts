import {
	EngProject,
	fetchEngProject,
	fetchEngProjects,
} from './contentful/engProjects';
import contentfulClient from './contentful/contentfulClient';
import projectGalleryWidths from './constants';

export { fetchEngProject, fetchEngProjects, contentfulClient, projectGalleryWidths };
export type { EngProject };
