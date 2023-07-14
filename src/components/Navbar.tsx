'use client';
import Link from 'next/link';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const navbarLinks = ['Projects', 'Resume', 'About'];
interface NavbarLink {
	isEnable: boolean;
	label: string;
	href: string;
	isExternal?: boolean;
}

const navbarLinks2: NavbarLink[] = [
	{ isEnable: true, label: 'Projects', href: '/projects' },
	{
		isEnable: true,
		label: 'Resume',
		href: 'https://drive.google.com/file/d/19EI6FfAlTuPpyAP42oGtEaKpmdCJSxk6/view?usp=sharing',
		isExternal: true,
	},
	{ isEnable: true, label: 'About', href: '/about' },
	{ isEnable: false, label: 'Contact', href: '/contact' },
];
// import { navbarLinks } from '@/utils';

export const Navbar = () => {
	const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		console.log('click to open');
		setAnchorNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		console.log('click to close');
		setAnchorNav(null);
	};
	const createButton = () => {};
	const handleNavMenuItemClick = (e: React.MouseEvent) => {
		console.log(`clicked: `, e.currentTarget.nodeValue);
		handleCloseNavMenu();
	};

	return (
		<AppBar position={'sticky'} elevation={24} sx={{ bgcolor: 'black' }}>
			<Container>
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1 }}>
						<Link href={'/'} passHref>
							<Button
								variant={'text'}
								className='normal-case text-2xl font-bold'
								color={'primary'}
							>
								Kevin Mahabeer
							</Button>
						</Link>
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}></Box>

					{/* Navbar links - hamburger menu (Mobile) */}
					<Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							onClick={handleOpenNavMenu}
							size='large'
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							anchorEl={anchorNav}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'right' }}
							open={Boolean(anchorNav)}
							onClose={handleCloseNavMenu}
							sx={{ display: { xs: 'block', md: 'none' } }}
						>
							{navbarLinks2.map((navbarLink, index) => (
								<Link key={index} href={navbarLink.href} passHref>
									<MenuItem key={index}>{navbarLink.label}</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					{/* Navbar links - stacked horizontally (Desktop + Tablet) */}
					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
						<Stack direction={'row'} spacing={2}>
							{navbarLinks2.map((navbarLink, index) => {
								if (!navbarLink.isEnable) {
									return null; // Skip rendering if navbarLink is not enabled
								}

								if (navbarLink.isExternal) {
									return (
										<a
											href={navbarLink.href}
											key={index}
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button
												key={navbarLink.label}
												onClick={handleCloseNavMenu}
												variant='text'
												sx={{ my: 2, color: 'white', display: 'block' }}
											>
												{navbarLink.label}
											</Button>
										</a>
									);
								}

								return (
									<Link href={navbarLink.href} passHref key={index}>
										<Button
											key={navbarLink.label}
											onClick={handleCloseNavMenu}
											variant='text'
											sx={{ my: 2, color: 'white', display: 'block' }}
										>
											{navbarLink.label}
										</Button>
									</Link>
								);
							})}
						</Stack>
					</Box>

					{/* <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
						<Stack direction={'row'} spacing={2}>
							{navbarLinks.map((link, index) =>
								link.isVisible ? (
									<Button variant='outlined' color='secondary' key={index}>
										{link.external ? (
											<a
												href={link.href}
												target={'_blank'}
												rel={'noopener noreferrer'}
											>
												{link.label}
											</a>
										) : link.href ? (
											<Link href={link.href}>{link.label}</Link>
										) : (
											<span>{link.label}</span>
										)}
									</Button>
								) : undefined
							)}
						</Stack>
					</Box> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
};
