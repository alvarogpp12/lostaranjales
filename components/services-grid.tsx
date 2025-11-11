 'use client'
 
 import { useState } from 'react'
 
 interface Service {
 	title: string
 	href?: string
 }
 
const services: Service[] = [
	{ title: 'Nuestro Espacio' },
	{ title: 'Eventos' },
	{ title: 'Celebraciones', href: '#eventos' },
	{ title: 'Rodajes', href: '#rodajes' },
	{ title: 'Vive Doñana' },
]
 
 interface ModalProps {
 	open: boolean
 	onClose: () => void
 	title: string
 	children: React.ReactNode
 }
 
 function Modal({ open, onClose, title, children }: ModalProps) {
 	if (!open) return null
 	return (
 		<div className="fixed inset-0 z-50 flex items-center justify-center">
 			<div
 				className="absolute inset-0 bg-black/50"
 				aria-hidden="true"
 				onClick={onClose}
 			/>
 			<div className="relative z-10 mx-4 max-h-[85vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white p-6 shadow-2xl">
 				<div className="mb-4 flex items-center justify-between">
 					<h3 className="font-serif text-2xl font-bold text-gray-900">{title}</h3>
 					<button
 						onClick={onClose}
 						className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
 						aria-label="Cerrar"
 					>
 						Cerrar
 					</button>
 				</div>
 				<div className="prose prose-stone max-w-none">
 					{children}
 				</div>
 			</div>
 		</div>
 	)
 }
 
export function ServicesGrid() {
	const [modalKey, setModalKey] = useState<'espacio' | 'eventos' | 'donana' | null>(null)
 
 	return (
 		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
 			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
 				{services.map((service) => {
					const isEspacio = service.title === 'Nuestro Espacio'
					const isEventos = service.title === 'Eventos'
					const isDonana = service.title.startsWith('Vive Doñana')
 					const Card = (
 						<div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-2xl">
 							<h3 className="font-serif text-2xl font-bold text-gray-900 transition-opacity group-hover:opacity-60">
 								{service.title}
 							</h3>
 						</div>
 					)
					return isEspacio ? (
 						<button
 							key={service.title}
 							type="button"
							onClick={() => setModalKey('espacio')}
 							className="text-left"
 						>
 							{Card}
 						</button>
					) : isEventos ? (
						<button
							key={service.title}
							type="button"
							onClick={() => setModalKey('eventos')}
							className="text-left"
						>
							{Card}
						</button>
					) : isDonana ? (
						<button
							key={service.title}
							type="button"
							onClick={() => setModalKey('donana')}
							className="text-left"
						>
							{Card}
						</button>
 					) : (
 						<a key={service.title} href={service.href}>
 							{Card}
 						</a>
 					)
 				})}
 			</div>
 
			{/* Modal: Nuestro Espacio */}
			<Modal open={modalKey === 'espacio'} onClose={() => setModalKey(null)} title="Alquiler del Espacio">
 				<div className="space-y-4 text-gray-800">
 					<section>
 						<h4 className="m-0 font-semibold">Descripción general</h4>
 						<ul className="mt-2 list-disc pl-5">
 							<li>
 								Finca privada ideal para eventos corporativos, bodas, rodajes o
 								celebraciones exclusivas.
 							</li>
 							<li>
 								Espacios exteriores con jardines, zonas de sombra natural y
 								vistas panorámicas.
 							</li>
 							<li>
 								Capacidad para 1000 personas en exterior y 300 en interior para
 								coctel y 150 sentados.
 							</li>
 							<li>Parking privado y fácil acceso para proveedores y transporte.</li>
 						</ul>
 					</section>
 
 					<section>
 						<h4 className="m-0 font-semibold">Condiciones y precios</h4>
 						<ul className="mt-2 list-disc pl-5">
 							<li>Alquiler del espacio (1 jornada): 4000€ + IVA.</li>
 							<li>Jornada de montaje o desmontaje: 1200€ + IVA.</li>
 							<li>Horario estándar 24 h.</li>
 							<li>
 								Reserva: 50% a la firma del contrato y 50% antes del evento.
 							</li>
 							<li>Limpieza: no incluida (se presupuestan aparte).</li>
 						</ul>
 					</section>
 
 					<section>
 						<h4 className="m-0 font-semibold">Servicios adicionales opcionales</h4>
 						<ul className="mt-2 list-disc pl-5">
 							<li>Producción integral del evento.</li>
 							<li>Trabaja con nuestros proveedores.</li>
 							<li>Seguridad privada.</li>
 							<li>Cobertura audiovisual (Kometa producciones).</li>
 						</ul>
 					</section>
 				</div>
 			</Modal>

			{/* Modal: Vive Doñana (experiencias) */}
			<Modal
				open={modalKey === 'donana'}
				onClose={() => setModalKey(null)}
				title="Vive Doñana (experiencias)"
			>
				<div className="space-y-6 text-gray-800">
					<section>
						<h4 className="m-0 font-semibold">Desayuno y Paseo por la Raya</h4>
						<p className="m-0 text-sm text-gray-600">Duración: 3 horas · Precio: desde 200 € por persona</p>
						<p className="mt-2">
							Una mañana para saborear la esencia de Doñana desde Los Taranjales. La experiencia comienza
							con un desayuno campestre en la finca, con productos locales: pan artesanal, aceite de oliva
							virgen extra, huevos de nuestro corral, mermeladas caseras, embutidos ibéricos y zumos
							naturales recién exprimidos.
						</p>
						<p className="mt-2">
							Tras el desayuno, paseo a caballo o en coche de caballos por La Raya, el histórico camino
							que conecta la Aldea del Rocío con el Parque Nacional de Doñana. Una oportunidad única para
							sentir la calma del entorno, la brisa del Coto y la belleza del paisaje marismeño.
						</p>
						<p className="mt-2">Se puede organizar transporte desde Sevilla o Jerez.</p>
						<ul className="mt-3 list-disc pl-5">
							<li>Desayuno en finca Los Taranjales</li>
							<li>Paseo guiado (a caballo o en coche de caballos)</li>
							<li>Seguro y guía acompañante</li>
							<li>Detalle gastronómico de cortesía</li>
						</ul>
					</section>

					<section>
						<h4 className="m-0 font-semibold">Sabores de Doñana y Tradición</h4>
						<p className="m-0 text-sm text-gray-600">Duración: 6 horas · Precio: desde 350 € por persona</p>
						<p className="mt-2">
							Una jornada que combina naturaleza, cultura y gastronomía andaluza. Visita guiada al Parque
							Nacional de Doñana con guía especializado. De regreso a la finca, almuerzo al aire libre en
							Los Taranjales con productos del entorno: pescados de Sanlúcar, carnes ibéricas, verduras de
							temporada y vinos del Condado.
						</p>
						<p className="mt-2">
							Al atardecer, paseo en coche de caballos por los alrededores de la finca y la Aldea del
							Rocío, envuelta en la luz dorada de Doñana.
						</p>
						<ul className="mt-3 list-disc pl-5">
							<li>Visita guiada al Parque Nacional de Doñana</li>
							<li>Almuerzo completo en Los Taranjales</li>
							<li>Paseo en coche de caballos al atardecer</li>
							<li>Guía acompañante y atención personalizada</li>
						</ul>
					</section>

					<section>
						<h4 className="m-0 font-semibold">Los Taranjales en Privado</h4>
						<p className="m-0 text-sm text-gray-600">
							Duración: 2 días / 1 noche · Precio: desde 700 € por persona
						</p>
						<p className="mt-2">
							Una propuesta exclusiva para vivir Doñana desde la autenticidad y el confort. Día 1:
							almuerzo de bienvenida, paseo a caballo privado por La Raya con copa al atardecer y cena
							bajo las estrellas. Alojamiento en hotel de categoría superior en la Aldea del Rocío.
						</p>
						<p className="mt-2">
							Día 2: desayuno en la finca y excursión privada a Sanlúcar de Barrameda, cruzando el
							Guadalquivir para descubrir su puerto, su historia y su gastronomía marinera. Almuerzo de
							despedida en Los Taranjales.
						</p>
						<ul className="mt-3 list-disc pl-5">
							<li>Alojamiento en hotel de categoría superior en la Aldea del Rocío</li>
							<li>Todos los desayunos, comidas y cenas</li>
							<li>Paseos a caballo o en coche de caballos</li>
							<li>Visita privada a Sanlúcar de Barrameda y Doñana</li>
							<li>Traslados internos y guía acompañante</li>
						</ul>
						<p className="mt-2">Opcional: Experiencia en Bodegas La Gitana (Sanlúcar de Barrameda).</p>
					</section>
				</div>
			</Modal>
			{/* Modal: Eventos */}
			<Modal open={modalKey === 'eventos'} onClose={() => setModalKey(null)} title="Eventos">
				<div className="space-y-4 text-gray-800">
					<p className="m-0">
						Creamos experiencias inolvidables. Los Taranjales es el escenario perfecto para bodas, eventos
						corporativos, celebraciones privadas y presentaciones de marca. El entorno natural, la privacidad
						y la flexibilidad de los espacios permiten diseñar cualquier tipo de evento a medida.
					</p>
					<ul className="mt-2 list-disc pl-5">
						<li>Amplias zonas exteriores con jardines y sombra natural.</li>
						<li>Salón interior con capacidad para 300 invitados (cóctel) / 150 (sentados).</li>
						<li>Parking privado para invitados y proveedores.</li>
						<li>Accesos cómodos para montaje, descarga y logística.</li>
					</ul>
					<ul className="mt-2 list-disc pl-5">
						<li>Eventos corporativos y sociales.</li>
						<li>Bodas y celebraciones privadas.</li>
						<li>Rodajes.</li>
					</ul>
				</div>
			</Modal>
 		</div>
 	)
 }
 

