'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
	{ label: 'Inicio', href: '#inicio' },
	{ label: 'Bodas', href: '#bodas' },
	{ label: 'Eventos', href: '#eventos' },
	{ label: 'Espacios', href: '#espacios' },
	{ label: 'Contacto', href: '#contacto' },
]

export function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<nav
			className={`fixed top-0 z-50 w-full transition-all duration-300 ${
				isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
			}`}
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-20 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2">
						<span
							className={`font-serif text-2xl font-bold tracking-tight transition-colors ${
								isScrolled ? 'text-gray-900' : 'text-white'
							}`}
						>
							LOS TARANJALES
						</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden items-center space-x-8 md:flex">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`text-sm font-medium uppercase tracking-wide transition-colors hover:opacity-70 ${
									isScrolled ? 'text-gray-700' : 'text-white'
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
						aria-label="Toggle menu"
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="border-t border-gray-200 bg-white md:hidden">
					<div className="space-y-1 px-4 pb-3 pt-2">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	)
}

