import Head from 'next/head';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BestPerformingSection from '../components/BestPerformingSection';
import NavbarWhite from '../components/NavbarWhite';

export default function Home() {
	return (
		<div>
			<Head>
				<title>TheFluencer</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{/* <Navbar /> */}
				<NavbarWhite />
				<div className="bg-[#eff6fd] text-center py-20 space-y-5">
					<div className="text-[#ef6461] text-5xl font-semibold">
						Maximize Your Influence.
					</div>
					<div className="text-xl font-regular">
						TheFluencer is your personal AI Driven Influencer Manager that will
						assist you with all your content creation needs.
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
