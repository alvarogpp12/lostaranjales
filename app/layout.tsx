import 'styles/tailwind.css'
import localFont from 'next/font/local'
import { ViewportLock } from 'components/viewport-lock'
import { Footer } from 'components/footer'
import { Navigation } from 'components/navigation'

const boris = localFont({
    src: [
        { path: './fonts/boris/CSBoris-Regular.ttf', weight: '400', style: 'normal' },
        { path: './fonts/boris/CSBoris-Italic.ttf', weight: '400', style: 'italic' },
    ],
    display: 'swap',
    variable: '--font-boris',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className={`scroll-smooth overflow-x-hidden ${boris.variable}`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
            </head>
			<body className="antialiased font-serif overflow-x-hidden overscroll-x-none touch-pan-y">
				<Navigation />
				<ViewportLock />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
