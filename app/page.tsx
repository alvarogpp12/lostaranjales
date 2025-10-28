import { Metadata } from 'next'
import { Contact } from 'components/contact'
import { Gallery } from 'components/gallery'
import { Hero } from 'components/hero'
import { Services } from 'components/services'

export const metadata: Metadata = {
	title: 'Los Taranjales - Finca de Eventos y Celebraciones',
	description:
		'Finca exclusiva para bodas, eventos corporativos y celebraciones en un entorno natural único. Los Taranjales, donde tus sueños se hacen realidad.',
	openGraph: {
		title: 'Los Taranjales - Finca de Eventos',
		description: 'Finca exclusiva para bodas y eventos en un entorno natural único',
		type: 'website',
	},
}

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<Gallery />
			<Contact />
		</>
	)
}
