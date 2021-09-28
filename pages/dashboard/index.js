import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BestPerformingSection from '../components/BestPerformingSection';

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
