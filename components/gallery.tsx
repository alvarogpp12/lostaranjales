const galleryItems = [
	{
		id: 1,
		title: 'Ceremonia al Aire Libre',
		category: 'Bodas',
		color: 'from-rose-500 to-pink-600',
	},
	{
		id: 2,
		title: 'Salón Principal',
		category: 'Espacios',
		color: 'from-amber-500 to-orange-600',
	},
	{
		id: 3,
		title: 'Jardines',
		category: 'Espacios',
		color: 'from-emerald-500 to-green-600',
	},
	{
		id: 4,
		title: 'Eventos Corporativos',
		category: 'Eventos',
		color: 'from-blue-500 to-indigo-600',
	},
	{
		id: 5,
		title: 'Cóctel en Terraza',
		category: 'Espacios',
		color: 'from-purple-500 to-violet-600',
	},
	{
		id: 6,
		title: 'Recepción Nocturna',
		category: 'Bodas',
		color: 'from-slate-700 to-slate-900',
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

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{galleryItems.map((item) => (
						<div
							key={item.id}
							className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl"
						>
							{/* Placeholder gradient - replace with actual images */}
							<div className={`h-full w-full bg-gradient-to-br ${item.color} transition-transform duration-500 group-hover:scale-110`}>
								{/* Replace with: */}
								{/* <Image src={`/images/gallery/${item.id}.jpg`} alt={item.title} fill className="object-cover" /> */}
							</div>

							{/* Overlay */}
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

							{/* Content */}
							<div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
								<p className="mb-1 text-sm font-medium uppercase tracking-wide">{item.category}</p>
								<h3 className="font-serif text-2xl font-bold">{item.title}</h3>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

