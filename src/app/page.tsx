import { Box, Card, Container, Typography } from '@mui/material';

export default function Home() {
	return (
		<main>
			<div className='px-16 mt-8'>
				<div className='richtext mx-auto sm:max-w-md md:max-w-xl lg:max-w-none'>
					<h2 className={'font-bold'}>Welcome to my portfolio!</h2>
					<p>
						My name is Kevin Mahabeer. I&apos;m an Electrical Engineering
						graduate from Drexel University. Through experiences interning at
						NASA Goddard Space Flight Center and working at General Dynamics
						Electric Boat, I&apos;ve worked hard to refine my skills in MATLAB,
						analog and digital circuits, and digital signal processing.
					</p>
					<p>
						I created this portfolio to showcase some of the skills I&apos;ve
						developed. I apologize for any imperfections you will encounter on
						this website. I recently developed and deployed this website and
						I&apos;m constantly working on enhancing the user experience and
						interface and fixing bugs.
					</p>
					<p>
						If you&apos;re interested, you can find the source code repository
						for this portfolio on my&nbsp;
						<a
							href='https://github.com/kmahabeer/engineering-portfolio'
							target='_blank'
							rel='noopener noreferrer'
							className={'text-blue-500'}
						>
							{'GitHub'}
						</a>
						. The “PROJECTS” page on this website will always be changing, as
						I&apos;m continuously documenting, adding, and revising my personal
						engineering projects and university coursework.
					</p>
					<p>Thanks for visiting!</p>
					<p className={'text-gray-400'}>Kevin</p>
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
				</div>
			</div>
		</main>
	);
}
