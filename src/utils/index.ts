import {
  EngProject,
  fetchEngProject,
  fetchEngProjects,
} from './contentful/engProjects';
import contentfulClient from './contentful/contentfulClient';
import { projectGalleryWidths, navbarLinks } from './constants';

export {
  fetchEngProject,
  fetchEngProjects,
  contentfulClient,
  projectGalleryWidths,
  navbarLinks,
};
export type { EngProject };
