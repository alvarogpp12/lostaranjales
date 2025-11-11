import { ServicesGrid } from './services-grid'

export function Services() {
	return (
		<>
		{/* Sección del Video - Protagonista */}
		<section className="relative flex h-[100dvh] items-center justify-center bg-black md:h-screen">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="h-full w-full object-cover object-[50%_40%] md:object-contain md:object-center"
			>
				<source src="/videos/vacas.mp4" type="video/mp4" />
			</video>
			{/* Botón de llamada superpuesto */}
			<a
				href="tel:+34675690515"
				className="absolute bottom-6 right-6 rounded-full bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-lg transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:px-7 sm:py-3.5"
				aria-label="Llamar a Los Taranjales"
			>
				Llamar ahora
			</a>
		</section>

			{/* Sección de Servicios - Tarjetas */}
			<section className="bg-white py-24">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
						Todo tipo de eventos
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Cada evento es único y merece una atención excepcional
					</p>
				</div>
				<ServicesGrid />
			</section>
		</>
	)
}

