import Image from 'next/image'
import { Maximize2, Users2, Utensils } from 'lucide-react'
import featuresBanner from 'public/images/features-banner.png'

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
            {/* Contenedor ancho completo con imagen 16:9 y texto superpuesto */}
            <div className="mx-auto max-w-none px-0">
                <div className="relative w-full select-none overflow-hidden">
                    <Image
                        src={featuresBanner}
                        alt="Los Taranjales - Mesa en la laguna"
                        className="h-auto w-full select-none pointer-events-none"
                        priority
                    />

                    {/* Overlay de texto en blanco ocupando el ancho */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full text-white">
                            <h2 className="mb-10 text-center font-serif text-4xl font-bold md:text-5xl">
                                Características del Espacio
                            </h2>

                            <div className="grid gap-10 md:grid-cols-3">
                                {features.map((feature) => (
                                    <div key={feature.stat} className="text-center">
                                        <h3 className="mb-2 font-serif text-3xl font-bold md:text-4xl">
                                            {feature.stat}
                                        </h3>
                                        <p className="mx-auto max-w-sm text-base md:text-lg">
                                            {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}

