import { Maximize2, Users2, Utensils } from 'lucide-react'

const features = [
	{
		icon: Maximize2,
		stat: 'Más de 1.500 m²',
		description: 'de jardín y una nave diáfana de 300 m²',
	},
	{
		icon: Users2,
		stat: '1.000 personas',
		description: 'Capacidad para 1.000 personas en exterior y 350 en el interior',
	},
	{
		icon: Utensils,
		stat: 'Producción integral',
		description: 'Idea, diseño y planificación; técnica y catering',
	},
]

export function Features() {
	return (
		<section className="bg-stone-50 py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
						Características del Espacio
					</h2>
				</div>

				<div className="grid gap-12 md:grid-cols-3">
					{features.map((feature) => {
						const Icon = feature.icon
						return (
							<div key={feature.stat} className="text-center">
								<div className="mb-6 inline-flex">
									<Icon className="size-12 text-gray-900" strokeWidth={1.5} />
								</div>
								<h3 className="mb-3 font-serif text-3xl font-bold text-gray-900">{feature.stat}</h3>
								<p className="text-lg text-gray-600">{feature.description}</p>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

