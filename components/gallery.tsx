"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

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
    const images = galleryItems.map((g) => g.image).filter(Boolean) as string[]
    const [index, setIndex] = useState(0)

    const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length)
    const goNext = () => setIndex((i) => (i + 1) % images.length)

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') goPrev()
            if (e.key === 'ArrowRight') goNext()
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <section id="espacios" className="relative h-screen w-full bg-white">
            {/* Imagen a pantalla completa */}
            <div className="absolute inset-0 bg-white">
                <Image
                    key={images[index]}
                    src={images[index]}
                    alt={`Foto ${index + 1}`}
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            {/* Controles */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-4">
                <button
                    onClick={goPrev}
                    aria-label="Anterior"
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 p-3 text-gray-900 backdrop-blur transition-colors hover:bg-white"
                >
                    <ChevronLeft className="size-6" />
                </button>
                <button
                    onClick={goNext}
                    aria-label="Siguiente"
                    className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/80 p-3 text-gray-900 backdrop-blur transition-colors hover:bg-white"
                >
                    <ChevronRight className="size-6" />
                </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Ir a la foto ${i + 1}`}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 w-6 rounded-full transition-colors ${
                                i === index ? 'bg-white' : 'bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

