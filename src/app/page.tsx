import { Box, Card, Container, Typography } from '@mui/material';

export default function Home() {
	return (
		<main>
			<Container sx={{ bgcolor: 'black' }}>
				<Box sx={{ px: { sm: 1, md: 4, lg: 8 }, py: 4 }}>
					<h1 className={'font-bold'}>Welcome to my portfolio!</h1>
					<br />
					<p>
						My name is Kevin Mahabeer. I&apos;m an Electrical Engineering
						graduate from Drexel University. Through experiences interning at
						NASA Goddard Space Flight Center and working at General Dynamics
						Electric Boat, I&apos;ve worked hard to refine my skills in MATLAB,
						analog and digital circuits, and digital signal processing.
					</p>
					<br />
					<p>
						I created this portfolio to showcase some of the skills I&apos;ve
						developed. I apologize for any imperfections you will encounter on
						this website. I recently developed and deployed this website and
						I&apos;m constantly working on enhancing the user experience and
						interface and fixing bugs.
					</p>
					<br />
					<p>
						If you&apos;re interested, you can find the source code for this
						portfolio on my
						<a
							href='https://github.com/kmahabeer/engineering-portfolio'
							target='_blank'
							rel='noopener noreferrer'
							className={'text-blue-500'}
						>
							{' GitHub page'}
						</a>
						. The “PROJECTS” page on this website will always be changing, as
						I&apos;m continuously documenting, adding, and revising my personal
						engineering projects and university coursework.
					</p>
					<br />
					<p>Thanks for visiting!</p>
					<br />
					<p className={'text-gray-400'}>Kevin</p>
					<br />
					<ul>
						<li>
							<a
								href='https://github.com/kmahabeer'
								target='_blank'
								rel='noopener noreferrer'
								className={'text-blue-500 opacity-75'}
							>
								{'GitHub Profile'}
							</a>
						</li>
						<li>
							<a
								href='https://linkedin.com/in/kevinmahabeer/'
								target='_blank'
								rel='noopener noreferrer'
								className={'text-blue-500 opacity-75'}
							>
								{'LinkedIn'}
							</a>
						</li>
					</ul>
				</Box>
			</Container>
		</main>
	);
}
