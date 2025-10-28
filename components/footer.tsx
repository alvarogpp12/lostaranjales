import { Facebook, Instagram, Mail } from 'lucide-react'

export function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer className="bg-gray-900 text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-3">
					{/* Brand */}
					<div>
						<h3 className="mb-4 font-serif text-2xl font-bold">LOS TARANJALES</h3>
						<p className="text-gray-400">
							Un espacio único donde tus momentos más especiales cobran vida en un entorno natural
							incomparable.
						</p>
					</div>

					{/* Links */}
					<div>
						<h4 className="mb-4 font-semibold">Enlaces Rápidos</h4>
						<ul className="space-y-2 text-gray-400">
							<li>
								<a href="#inicio" className="hover:text-white">
									Inicio
								</a>
							</li>
							<li>
								<a href="#bodas" className="hover:text-white">
									Bodas
								</a>
							</li>
							<li>
								<a href="#eventos" className="hover:text-white">
									Eventos
								</a>
							</li>
							<li>
								<a href="#espacios" className="hover:text-white">
									Espacios
								</a>
							</li>
							<li>
								<a href="#contacto" className="hover:text-white">
									Contacto
								</a>
							</li>
						</ul>
					</div>

					{/* Social */}
					<div>
						<h4 className="mb-4 font-semibold">Síguenos</h4>
						<div className="flex space-x-4">
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-gray-800 p-2 hover:bg-emerald-700"
								aria-label="Instagram"
							>
								<Instagram className="size-5" />
							</a>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-full bg-gray-800 p-2 hover:bg-emerald-700"
								aria-label="Facebook"
							>
								<Facebook className="size-5" />
							</a>
							<a
								href="mailto:info@lostaranjales.com"
								className="rounded-full bg-gray-800 p-2 hover:bg-emerald-700"
								aria-label="Email"
							>
								<Mail className="size-5" />
							</a>
						</div>
						<p className="mt-4 text-sm text-gray-400">
							<a href="tel:+34123456789" className="hover:text-white">
								+34 123 456 789
							</a>
							<br />
							<a href="mailto:info@lostaranjales.com" className="hover:text-white">
								info@lostaranjales.com
							</a>
						</p>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
					<p>© {currentYear} Los Taranjales. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	)
}

