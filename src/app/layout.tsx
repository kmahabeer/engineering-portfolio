import '@/styles/globals.css'
import { Container } from '@mui/material';
import { Navbar } from '@/components';

export const metadata = {
  title: 'Kevin Mahabeer',
  description: 'My personal engineering portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<html lang='en'>
			<body className={'relative'}>
				<Navbar />
				<Container maxWidth={'lg'}>
					<div className='md:px-16 mt-8'>{children}</div>
				</Container>
			</body>
		</html>
	);
}
