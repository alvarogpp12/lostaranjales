'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'

interface FormData {
	name: string
	email: string
	phone: string
	message: string
}

export function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// TODO: Implement form submission
		console.log('Form submitted:', formData)
		alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<section id="contacto" className="bg-stone-50 py-24">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">Contacto</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Estamos aquí para hacer realidad el evento de tus sueños
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-2">
					{/* Contact Info */}
					<div className="space-y-8">
						<div>
							<h3 className="mb-6 font-serif text-2xl font-bold text-gray-900">Información de Contacto</h3>
							<div className="space-y-4">
								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-gray-100 p-3">
										<Phone className="size-5 text-gray-900" />
									</div>
									<div>
										<p className="font-medium text-gray-900">Teléfono</p>
										<a href="tel:+34123456789" className="text-gray-600 hover:text-gray-900">
											+34 123 456 789
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-gray-100 p-3">
										<Mail className="size-5 text-gray-900" />
									</div>
									<div>
										<p className="font-medium text-gray-900">Email</p>
										<a
											href="mailto:info@lostaranjales.com"
											className="text-gray-600 hover:text-gray-900"
										>
											info@lostaranjales.com
										</a>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="rounded-full bg-gray-100 p-3">
										<MapPin className="size-5 text-gray-900" />
									</div>
									<div>
										<p className="font-medium text-gray-900">Dirección</p>
										<p className="text-gray-600">
											Camino de los Naranjos, 123
											<br />
											28000 Madrid, España
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="rounded-2xl bg-gray-900 p-8 text-white">
							<h4 className="mb-2 font-serif text-xl font-bold">Horario de Atención</h4>
							<p className="text-gray-200">Lunes a Viernes: 9:00 - 19:00</p>
							<p className="text-gray-200">Sábados: 10:00 - 14:00</p>
							<p className="mt-4 text-sm text-gray-300">
								Visitas concertadas disponibles fuera del horario habitual
							</p>
						</div>
					</div>

					{/* Contact Form */}
					<form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white p-8 shadow-lg">
						<div>
							<label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
								Nombre completo *
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={formData.name}
								onChange={handleChange}
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							/>
						</div>

						<div>
							<label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
								Email *
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={formData.email}
								onChange={handleChange}
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							/>
						</div>

						<div>
							<label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
								Teléfono
							</label>
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							/>
						</div>

						<div>
							<label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
								Mensaje *
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows={4}
								value={formData.message}
								onChange={handleChange}
								className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200"
							/>
						</div>

						<button
							type="submit"
							className="w-full rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200"
						>
							Enviar Mensaje
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

