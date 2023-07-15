import { Box, Card, Container, Typography } from '@mui/material';

export default function Home() {
	return (
		<main>
			<Container sx={{ bgcolor: 'black' }}>
				<Box sx={{ px: { sm: 1, md: 4, lg: 8 }, py: 4 }}>
					<h1>Home</h1>
				</Box>
			</Container>
		</main>
	);
}
