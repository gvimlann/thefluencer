import Link from 'next/link';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { OverviewStat } from '../mockData/OverviewStat';

export default function HeroSection() {
	const { results } = OverviewStat;

	return (
		<div className="flex bg-[#d3d3d3] overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div className="z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
					<main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
						<div className="sm:text-center lg:text-left">
							<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
								<span className="block xl:inline">
									Explore Similar Posts and Stories...
								</span>
							</h1>
							{/* <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
								Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
								lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
								fugiat aliqua.
							</p> */}
							<div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
								<Link href="https://www.google.com">
									<button className="rounded-md shadow flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
										<span className="mr-3">Start</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</Link>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div className="justify-center flex flex-col w-1/2">
				{/* <img
					className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
					src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
					alt=""
				/> */}
				{/* <div className="flex flex-col"> */}
				<div className="mb-10 bg-[#0b3954] p-5 rounded-l-md">
					<span className="text-2xl tracking-tight font-semibold text-white sm:text-3xl md:text-4xl">
						Things that make you a{' '}
						<span className="text-[#EF6461]"> GREAT </span>
						influencer.
					</span>
				</div>
				<div className="flex flex-col text-2xl max-w-md space-y-5">
					{results.map(({ stat_type, stat_value }, idx) => {
						// const stat_type_split = stat_type.split(' ');
						return (
							<div className="flex justify-between" key={idx}>
								<span className="border-gray-400">
									{stat_type}
									{/* Average <span className="font-bold">Impressions</span> per day */}
									{/* <span className="font-bold"> {stat_type_split[1]} </span> */}
								</span>
								<span>{stat_value}</span>
							</div>
						);
					})}

					{/* <div className="flex justify-between">
						<span className="border-gray-400">
							Average <span className="font-bold">Impressions</span> per day
						</span>
						<span>11</span>
					</div>
					<div className="flex justify-between">
						<span className="border-gray-400">
							Average <span className="font-bold">Reach</span> per day
						</span>
						<span>11</span>
					</div>
					<div className="flex justify-between">
						<span className="border-gray-400">
							Average <span className="font-bold">Profile</span> Views per day
						</span>
						<span>0</span>
					</div> */}
				</div>
				{/* </div> */}
			</div>
		</div>
	);
}
