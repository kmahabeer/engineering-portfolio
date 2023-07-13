import '@/styles/globals.css'
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
				{children}
			</body>
		</html>
	);
}
