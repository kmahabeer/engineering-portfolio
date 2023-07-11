import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className='w-full bg-black sticky top-0 left-0 right-0 z-10'>
			<div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
				<div>
					<div className='flex-1 items-center justify-between py-3 md:py-5 md:block '>
						<Link href={'/'} className='btn btn-ghost normal-case text-2xl'>
							Kevin Mahabeer
						</Link>
					</div>
				</div>

				<div>
					<ul className='flex-none menu menu-horizontal py-3 md:py-5 text-lg font-semibold'>
						<li>
							<Link href={'/projects'}>Projects</Link>
						</li>
						<li>
							<Link href={'/resume'}>Resume</Link>
						</li>
						<li>
							<Link href={'/about'}>About</Link>
						</li>
						<li>
							<Link href={'/contact'}>Contact</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
