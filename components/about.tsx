import Image from 'next/image'

export function About() {
	return (
		<section className="relative overflow-hidden bg-white py-24 lg:py-32">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="relative lg:flex lg:items-center">
					{/* Foto grande a la izquierda */}
					<div className="relative h-[400px] w-full lg:h-[700px] lg:w-[65%]">
						<Image
							src="/images/about.jpg"
							alt="Los Taranjales"
							fill
							className="rounded-2xl object-cover"
						/>
					</div>

					{/* Caja blanca flotante superpuesta */}
					<div className="relative -mt-20 mx-4 rounded-2xl bg-white p-8 shadow-2xl sm:p-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:w-[50%] lg:-translate-y-1/2 lg:p-12">
						<h2 className="mb-8 font-serif text-4xl font-bold text-gray-900 md:text-5xl">Sobre Nosotros</h2>

						<div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
							<p>
								Los Taranjales nace con una idea clara: ofrecer un espacio con alma, bien ubicado, donde cada
								celebración tenga sentido y refleje la forma de ser de quienes la organizan.
							</p>
							<p>
								Somos un equipo pequeño, conocedor del entorno y con experiencia en eventos. No trabajamos con
								guiones cerrados ni fórmulas prefabricadas. Preferimos escuchar, adaptarnos y acompañar.
							</p>
							<p>
								Sabemos que cada boda, bautizo o encuentro familiar tiene un ritmo distinto, y nos encargamos
								de que todo fluya con naturalidad, sin sobrecargar ni complicar lo que debería ser sencillo.
							</p>
							<div className="mt-8 border-l-4 border-gray-900 pl-6">
								<p className="text-lg font-medium text-gray-900 md:text-xl">
									Nos diferencia el entorno —El Rocío, Doñana, la luz, la calma— pero también una forma de
									hacer las cosas: con honestidad, con atención al detalle y con los pies en la tierra.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

