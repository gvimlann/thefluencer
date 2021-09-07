import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BestPerformingSection from '../components/BestPerformingSection';
import Footer from '../components/Footer';

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
