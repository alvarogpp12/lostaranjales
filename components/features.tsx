import { Maximize2, Users2, Utensils } from 'lucide-react'
import Image from 'next/image'
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
		<section className="bg-stone-50 pt-6 pb-2 md:py-24">
            {/* Móvil: franja imagen y tarjetas debajo (mismo contenido), sin overlays */}
            <div className="md:hidden">
                <div className="relative w-full select-none overflow-hidden">
                    <Image
                        src={featuresBanner}
                        alt="Los Taranjales - Mesa en la laguna"
                        className="h-[28svh] w-full select-none object-contain pointer-events-none"
                        priority
                    />
                    {/* Título centrado y superpuesto en la foto (blanco) */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <h2 className="mx-4 text-center font-serif text-2xl font-bold text-white drop-shadow-md">
                            Características del Espacio
                        </h2>
                    </div>
                </div>
                <div className="mt-1 px-4">
                    <div className="mx-auto grid w-full max-w-md gap-3">
                        {features.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={feature.stat}
                                    className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/95 p-4 shadow-lg backdrop-blur-md"
                                >
                                    <Icon className="size-8 flex-shrink-0 text-gray-900" strokeWidth={1.6} />
                                    <div>
                                        <h3 className="font-serif text-xl font-bold leading-tight text-gray-900">
                                            {feature.stat}
                                        </h3>
                                        <p className="mt-1 text-sm leading-snug text-gray-700">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Desktop: igual que móvil pero adaptado (franja con título superpuesto + tarjetas) */}
            <div className="hidden md:block">
                {/* Franja a todo el ancho real (full‑bleed) con título superpuesto */}
                <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen select-none overflow-hidden">
                    <div className="relative h-[32svh] w-full">
                        <Image
                            src={featuresBanner}
                            alt="Los Taranjales - Mesa en la laguna"
                            fill
                            className="pointer-events-none select-none object-contain object-center"
                            priority
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h2 className="mx-4 text-center font-serif text-5xl font-bold text-white drop-shadow-md">
                                Características del Espacio
                            </h2>
                        </div>
                    </div>
                </div>
                {/* Tarjetas en 3 columnas, mismo contenido que móvil */}
                <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 md:grid-cols-3">
                        {features.map((feature) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={feature.stat}
                                    className="flex items-start gap-3 rounded-xl border border-black/5 bg-white/95 p-5 shadow-lg backdrop-blur-md"
                                >
                                    <Icon className="size-8 flex-shrink-0 text-gray-900" strokeWidth={1.6} />
                                    <div>
                                        <h3 className="font-serif text-2xl font-bold leading-tight text-gray-900">
                                            {feature.stat}
                                        </h3>
                                        <p className="mt-1 text-base leading-snug text-gray-700">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
	)
}

