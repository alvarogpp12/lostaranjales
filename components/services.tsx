import { Heart, Users, Sparkles } from 'lucide-react'

const services = [
	{
		icon: Heart,
		title: 'Bodas',
		description: 'El día más especial de tu vida en un entorno mágico y natural',
		href: '#bodas',
	},
	{
		icon: Users,
		title: 'Eventos Corporativos',
		description: 'Espacios profesionales para tus reuniones y celebraciones empresariales',
		href: '#eventos',
	},
	{
		icon: Sparkles,
		title: 'Celebraciones',
		description: 'Comuniones, bautizos y eventos sociales en un marco incomparable',
		href: '#eventos',
	},
]

export function Services() {
	return (
		<section className="bg-stone-50 py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
						Nuestros Servicios
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Cada evento es único y merece una atención excepcional
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{services.map((service) => {
						const Icon = service.icon
						return (
							<a
								key={service.title}
								href={service.href}
								className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
							>
								<div className="mb-4 inline-flex rounded-full bg-emerald-100 p-3">
									<Icon className="size-6 text-emerald-700" />
								</div>
								<h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">{service.title}</h3>
								<p className="text-gray-600">{service.description}</p>
								<div className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 transition-all group-hover:translate-x-1">
									Ver más
									<svg className="ml-2 size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
									</svg>
								</div>
							</a>
						)
					})}
				</div>
			</div>
		</section>
	)
}

