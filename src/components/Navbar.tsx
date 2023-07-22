'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';

interface NavbarLink {
  isEnabled: boolean;
  label: string;
  href: string;
  isExternal?: boolean;
}

const navbarLinks: NavbarLink[] = [
  { isEnabled: true, label: 'Projects', href: '/projects' },
  {
    isEnabled: true,
    label: 'Resume',
    href: 'https://drive.google.com/file/d/1ro7J4SGPBnLJ5HRgyg2eAOD_VSA1TyzQ/view?usp=sharing',
    isExternal: true,
  },
  { isEnabled: false, label: 'About', href: '/about' },
  { isEnabled: false, label: 'Contact', href: '/contact' },
];
// import { navbarLinks } from '@/utils';

export const Navbar = () => {
  const router = useRouter();
  const [anchorNav, setAnchorNav] = React.useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setIsOpen(true);
    setAnchorNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setIsOpen(false);
    setAnchorNav(null);
  };

  const handleClickSelect = (href: string) => () => {
    router.push(href);
    handleCloseNavMenu();
  };

  return (
    <AppBar position={'sticky'} elevation={24} sx={{ bgcolor: 'black' }}>
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link href={'/'} passHref>
              <Button variant={'text'} color={'primary'}>
                Kevin Mahabeer
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}></Box>

          {/* Navbar links - hamburger menu (Mobile) */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}
              size="large"
              color="inherit"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
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
              {navbarLinks.map((navbarLink, index) => {
                if (!navbarLink.isEnabled) {
                  return null;
                }
                if (navbarLink.isExternal) {
                  return (
                    <a
                      href={navbarLink.href}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MenuItem onClick={handleCloseNavMenu}>
                        {navbarLink.label}
                      </MenuItem>
                    </a>
                  );
                }
                return (
                  <MenuItem
                    key={index}
                    onClick={handleClickSelect(navbarLink.href)}
                  >
                    {navbarLink.label}
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
          {/* Navbar links - stacked horizontally (Desktop + Tablet) */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Stack direction={'row'} spacing={2}>
              {navbarLinks.map((navbarLink, index) => {
                if (!navbarLink.isEnabled) {
                  return null;
                }
                if (navbarLink.isExternal) {
                  return (
                    <a
                      href={navbarLink.href}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        onClick={handleCloseNavMenu}
                        variant="text"
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {navbarLink.label}
                      </Button>
                    </a>
                  );
                }
                return (
                  <Button
                    key={index}
                    onClick={handleClickSelect(navbarLink.href)}
                    variant="text"
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {navbarLink.label}
                  </Button>
                );
              })}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
