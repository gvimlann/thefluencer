import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BestPerformingSection from '../components/BestPerformingSection';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Navbar />
				<HeroSection />
				<BestPerformingSection />
			</main>

			{/* <footer className="flex items-center justify-center w-full h-24 border-t">
				<a>TheFluencer</a>
			</footer> */}
		</div>
	);
}
