const services = [
	{
		title: 'Bodas',
		href: '#bodas',
	},
	{
		title: 'Corporativos',
		href: '#eventos',
	},
	{
		title: 'Celebraciones',
		href: '#eventos',
	},
	{
		title: 'Vive Doñana',
		href: '#donana',
	},
]

export function Services() {
	return (
		<>
			{/* Sección del Video - Protagonista */}
			<section className="h-screen overflow-hidden">
				<video autoPlay loop muted playsInline className="size-full object-cover">
					<source src="/videos/fondo.mp4" type="video/mp4" />
				</video>
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
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{services.map((service) => (
							<a
								key={service.title}
								href={service.href}
								className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
							>
								<h3 className="font-serif text-2xl font-bold text-gray-900 transition-opacity group-hover:opacity-60">
									{service.title}
								</h3>
							</a>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

