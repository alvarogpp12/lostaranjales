import 'styles/tailwind.css'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className="scroll-smooth">
			<body className="antialiased">
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
