import {
	EngProject,
	fetchEngProject,
	fetchEngProjects,
} from './contentful/engProjects';
import contentfulClient from './contentful/contentfulClient';

export { fetchEngProject, fetchEngProjects, contentfulClient };
export type { EngProject };
