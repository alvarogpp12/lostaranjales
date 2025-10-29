import 'styles/tailwind.css'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import localFont from 'next/font/local'

const voga = localFont({
	src: './fonts/voga/Voga-Medium.otf',
	display: 'swap',
	variable: '--font-voga',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`scroll-smooth ${voga.variable}`}>
			<body className="antialiased">
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
