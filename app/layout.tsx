import 'styles/tailwind.css'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import { Bodoni_Moda } from 'next/font/google'

const bodoni = Bodoni_Moda({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-bodoni',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`scroll-smooth ${bodoni.variable}`}>
			<body className="antialiased">
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
