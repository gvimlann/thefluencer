import Head from 'next/head';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import BestPerformingSection from '../../components/BestPerformingSection';
import Navbar from '../../components/NavbarWhite';

export default function Home() {
	return (
		<div>
			<Head>
				<title>TheFluencer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />
				<HeroSection />
				<BestPerformingSection />
			</main>

			<Footer />
		</div>
	);
}
