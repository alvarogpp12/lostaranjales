export function Hero() {
	return (
		<section id="inicio" className="relative flex h-screen items-center justify-center overflow-hidden">
			{/* Background Image - Placeholder gradient until you add real images */}
			<div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-amber-900">
				{/* You can replace this with: */}
				{/* <Image src="/images/hero.jpg" alt="Los Taranjales" fill className="object-cover" priority /> */}
			</div>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/40" />

			{/* Content */}
			<div className="relative z-10 px-4 text-center">
				<h1 className="mb-6 font-serif text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
					LOS TARANJALES
				</h1>
				<p className="mx-auto max-w-2xl text-lg font-light text-white/90 md:text-xl lg:text-2xl">
					Un espacio único donde tus momentos más especiales cobran vida
				</p>
				<div className="mt-10">
					<a
						href="#contacto"
						className="inline-block rounded-full bg-white px-8 py-3 font-medium text-gray-900 transition-all hover:bg-white/90 hover:shadow-xl"
					>
						Descubre Nuestros Espacios
					</a>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
				<div className="flex flex-col items-center text-white">
					<span className="mb-2 text-xs uppercase tracking-widest">Descubre</span>
					<svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
		</section>
	)
}

