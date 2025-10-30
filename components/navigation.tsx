'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Logo centrado - Solo visible al inicio (sin scroll) */}
            <div
				className={`fixed left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
					isScrolled ? 'pointer-events-none opacity-0' : 'opacity-100'
				}`}
			>
				<Image
					src="/images/logo.png"
					alt="Finca Los Taranjales"
					width={300}
					height={300}
                    className="h-auto w-44 drop-shadow-2xl sm:w-56 md:w-80 lg:w-96"
					priority
				/>
			</div>

			{/* Navegación - Solo visible después de scroll */}
			<nav
				className={`fixed top-0 z-50 w-full transition-all duration-500 ${
					isScrolled
						? 'translate-y-0 bg-white/95 opacity-100 shadow-md backdrop-blur-sm'
						: 'pointer-events-none -translate-y-full opacity-0'
				}`}
			>
                <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
                    <div className="flex h-14 items-center justify-center sm:h-16 md:h-20">
						{/* Logo texto centrado */}
						<Link href="/" className="flex items-center space-x-2">
                            <span className="font-serif text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
								LOS TARANJALES
							</span>
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}

