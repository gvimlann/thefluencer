import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { InstagramPosts as InstagramPostsData } from '../../mockData/InstagramPosts';

function InstagramPosts() {
	const { results } = InstagramPostsData;

	return (
		<div>
			<Navbar />
			<main className="m-auto max-w-screen-lg">
				<div className="flex justify-between pt-20 items-center">
					<div className="flex items-center">
						<img src="/assets/instagram-logo.png" alt="Instagram" />
						<span className="text-[#ef6461] font-semibold text-xl ml-2">
							Instagram Posts
						</span>
					</div>
					<div className="text-gray-600 text-lg font font-light">
						Showing 0-6 posts from 6 posts
					</div>
				</div>
				<div className="pt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
					{results.map((result, idx) => {
						const { caption, media_url, like_count, comments_count } = result;
						return (
							<div
								key={idx}
								className="relative container mx-auto max-w-sm bg-white rounded-xl shadow-lg">
								{/* <img
									src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80"
									alt=""
								/> */}
								<img className="rounded-t-xl" src={media_url} alt="" />
								<div className="p-5 space-y-5">
									{/* <h1 className="text-3xl font-bold text-gray-800 cursor-pointer ">
								Flores
							</h1>
							<h2 className="text-xl text-gray-800 font-semibold">
								by Stuar Manson
							</h2> */}
									<p className="text-sm font font-light">{caption}</p>
									<div className="flex flex-col text-sm font-medium space-y-5">
										<div className="grid grid-cols-3">
											<div className="flex flex-col items-center">
												<span>Likes</span>
												<span className="text-[#ef6461] text-lg">
													{like_count}
												</span>
											</div>
											<div className="flex flex-col items-center">
												<span>Comments</span>
												<span className="text-[#ef6461] text-lg">
													{comments_count}
												</span>
											</div>
											<div className="flex flex-col items-center">
												<span>Saved</span>
												<span className="text-[#ef6461] text-lg">9</span>
											</div>
										</div>
										<div className="grid grid-cols-3">
											<div className="flex flex-col items-center">
												<span>Reach</span>
												<span className="text-[#ef6461] text-lg">9</span>
											</div>
											<div className="flex flex-col items-center">
												<span>Impressions</span>
												<span className="text-[#ef6461] text-lg">9</span>
											</div>
											<div className="flex flex-col items-center">
												<span>Engagement</span>
												<span className="text-[#ef6461] text-lg">9</span>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute bottom-0 right-0">
									<button className="bg-[#ef6461] text-white text-lg rounded-full h-8 w-8 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor">
											<path
												fillRule="evenodd"
												d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default InstagramPosts;
