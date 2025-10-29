import 'styles/tailwind.css'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'
import localFont from 'next/font/local'
import { Outfit } from 'next/font/google'

const voga = localFont({
	src: './fonts/voga/Voga-Medium.otf',
	display: 'swap',
	variable: '--font-voga',
})

const outfit = Outfit({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-outfit',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`scroll-smooth ${voga.variable} ${outfit.variable}`}>
			<body className="antialiased">
				<Navigation />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
