const galleryItems = [
	{
		id: 1,
		title: 'Ceremonia al Aire Libre',
		category: 'Bodas',
		color: 'from-rose-500 to-pink-600',
		size: 'large', // Ocupa 2 columnas
	},
	{
		id: 2,
		title: 'Salón Principal',
		category: 'Espacios',
		color: 'from-amber-500 to-orange-600',
		size: 'medium',
	},
	{
		id: 3,
		title: 'Jardines',
		category: 'Espacios',
		color: 'from-emerald-500 to-green-600',
		size: 'medium',
	},
	{
		id: 4,
		title: 'Eventos Corporativos',
		category: 'Eventos',
		color: 'from-blue-500 to-indigo-600',
		size: 'medium',
	},
	{
		id: 5,
		title: 'Cóctel en Terraza',
		category: 'Espacios',
		color: 'from-purple-500 to-violet-600',
		size: 'large', // Ocupa 2 columnas
	},
	{
		id: 6,
		title: 'Recepción Nocturna',
		category: 'Bodas',
		color: 'from-slate-700 to-slate-900',
		size: 'medium',
	},
	{
		id: 7,
		title: 'Piscina y Zona Chill Out',
		category: 'Espacios',
		color: 'from-cyan-500 to-blue-600',
		size: 'medium',
	},
	{
		id: 8,
		title: 'Capilla',
		category: 'Bodas',
		color: 'from-amber-600 to-yellow-700',
		size: 'medium',
	},
]

export function Gallery() {
	return (
		<section id="espacios" className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">Nuestros Espacios</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Descubre los rincones donde cada detalle cuenta una historia
					</p>
				</div>

				{/* Mosaico Grid */}
				<div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{galleryItems.map((item) => (
						<div
							key={item.id}
							className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
								item.size === 'large' ? 'sm:col-span-2' : 'col-span-1'
							}`}
						>
							{/* Placeholder gradient - replace with actual images */}
							<div
								className={`size-full bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}
							>
								{/* Replace with: */}
								{/* <Image src={`/images/gallery/${item.id}.jpg`} alt={item.title} fill className="object-cover" /> */}
							</div>

							{/* Overlay permanente sutil */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

							{/* Caption - Siempre visible en la parte inferior */}
							<div className="absolute inset-x-0 bottom-0 p-4 text-white transition-all duration-300 group-hover:p-6">
								<p className="mb-1 text-xs font-medium uppercase tracking-wider opacity-90">
									{item.category}
								</p>
								<h3 className="font-serif text-lg font-bold leading-tight">{item.title}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

