export const projectGalleryWidths: string[] = [
	'comic-grid-w-narrow comic-grid-h-normal',
	'comic-grid-w-superwide comic-grid-h-normal',
	'comic-grid-w-normal comic-grid-h-normal',
	'comic-grid-w-normal comic-grid-h-normal',
	'comic-grid-w-normal comic-grid-h-tall',
	'comic-grid-w-normal comic-grid-h-normal',
	'comic-grid-w-normal comic-grid-h-normal',
	'comic-grid-w-narrow comic-grid-h-normal',
	'comic-grid-w-narrow comic-grid-h-normal',
	'comic-grid-w-wide comic-grid-h-normal',
	'comic-grid-w-normal comic-grid-h-tall',
	'comic-grid-w-super comic-grid-h-tall',
	'comic-grid-w-superwide comic-grid-h-normal',
	'comic-grid-w-narrow comic-grid-h-normal',
	'comic-grid-w-narrow comic-grid-h-normal',
	'comic-grid-w-wide comic-grid-h-normal',
	'comic-grid-w-narrow comic-grid-h-normal',
];

const { RESUME_URL } = process.env;

interface NavbarLink {
	isVisible: boolean;
	label: string;
	href?: string;
	external?: boolean;
}

export const navbarLinks: NavbarLink[] = [
	{
		isVisible: true,
		label: 'Projects',
		href: '/projects',
	},
	{
		isVisible: true,
		label: 'Resume',
		href: RESUME_URL,
		external: true,
	},
	{
		isVisible: false,
		label: 'About',
		href: '/about',
	},
	{
		isVisible: false,
		label: 'Contact',
		href: '/contact',
	},
];
