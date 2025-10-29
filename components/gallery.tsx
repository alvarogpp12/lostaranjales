import Image from 'next/image'

const galleryItems = [
	{
		id: 1,
		title: 'Ceremonia al Aire Libre',
		category: 'Bodas',
		color: 'from-rose-500 to-pink-600',
		size: 'large',
		image: '/images/bodas.jpg',
	},
	{
		id: 2,
		title: 'Hermita',
		category: 'Espacios',
		color: 'from-amber-500 to-orange-600',
		size: 'medium',
		image: '/images/hermita.jpg',
	},
	{
		id: 3,
		title: 'Evento',
		category: 'Espacios',
		color: 'from-emerald-500 to-green-600',
		size: 'medium',
		image: '/images/evento1.jpg',
	},
	{
		id: 4,
		title: 'Evento',
		category: 'Eventos',
		color: 'from-blue-500 to-indigo-600',
		size: 'large',
		image: '/images/evento2.jpg',
	},
	{
		id: 5,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-purple-500 to-violet-600',
		size: 'medium',
		image: '/images/gallery1.jpg',
	},
	{
		id: 6,
		title: 'Espacios',
		category: 'Bodas',
		color: 'from-slate-700 to-slate-900',
		size: 'medium',
		image: '/images/gallery2.jpg',
	},
	{
		id: 7,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-cyan-500 to-blue-600',
		size: 'large',
		image: '/images/gallery3.jpg',
	},
	{
		id: 8,
		title: 'Espacios',
		category: 'Bodas',
		color: 'from-amber-600 to-yellow-700',
		size: 'medium',
		image: '/images/gallery4.jpg',
	},
	{
		id: 9,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-rose-500 to-pink-600',
		size: 'medium',
		image: '/images/gallery5.jpg',
	},
	{
		id: 10,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-amber-500 to-orange-600',
		size: 'large',
		image: '/images/gallery6.jpg',
	},
	{
		id: 11,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-emerald-500 to-green-600',
		size: 'medium',
		image: '/images/gallery7.jpg',
	},
	{
		id: 12,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-blue-500 to-indigo-600',
		size: 'medium',
		image: '/images/gallery8.jpg',
	},
	{
		id: 13,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-purple-500 to-violet-600',
		size: 'medium',
		image: '/images/gallery9.jpg',
	},
	{
		id: 14,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-slate-700 to-slate-900',
		size: 'medium',
		image: '/images/gallery10.jpg',
	},
	{
		id: 15,
		title: 'Espacios',
		category: 'Espacios',
		color: 'from-cyan-500 to-blue-600',
		size: 'medium',
		image: '/images/gallery11.jpg',
	},
]

export function Gallery() {
	return (
		<section id="espacios" className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Mosaico Grid */}
				<div className="grid auto-rows-[280px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{galleryItems.map((item) => (
						<div
							key={item.id}
							className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
								item.size === 'large' ? 'sm:col-span-2' : 'col-span-1'
							}`}
						>
							{/* Imagen real o placeholder gradient */}
							{item.image ? (
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
							) : (
								<div
									className={`size-full bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-110`}
								/>
							)}

							{/* Overlay sutil solo en hover */}
							<div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

