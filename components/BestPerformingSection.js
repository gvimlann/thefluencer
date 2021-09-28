import { OverviewGrowth } from '../mockData/OverviewGrowth';

function BestPerformingSection() {
	const { results } = OverviewGrowth;

	const hashtags = [
		{
			name: 'creativeagency',
			percentage: '27.75',
		},
		{
			name: 'creatives',
			percentage: '27.75',
		},
		{
			name: 'designs',
			percentage: '27.75',
		},
	];

	const mentions = [];

	const medias = [
		{
			name: 'Album',
			percentage: '27.75',
		},
		{
			name: 'Image',
			percentage: '41.76',
		},
		{
			name: 'Video',
			percentage: '30.49',
		},
	];

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5 max-w-screen-xl m-auto">
			<div className="border bg-gray-100 p-5 rounded-md text-center">
				<span className="text-xl font-semibold font-gray-900">
					Best Performing Hashtags
				</span>
				<div className="flex flex-col mt-2">
					{hashtags.map((hashtag, idx) => (
						<div
							key={idx}
							className="flex flex-row justify-between space-y-1 border-b border-gray-300">
							<span>#{hashtag.name}</span>
							<span>{hashtag.percentage}%</span>
						</div>
					))}
					{hashtags.length == 0 && <span>No hashtag found</span>}
				</div>
			</div>
			<div className="border bg-gray-100 p-5 rounded-md text-center">
				<span className="text-xl font-semibold font-gray-900">
					Best Performing Mentions
				</span>
				<div className="flex flex-col mt-2">
					{mentions.map((mention, idx) => (
						<div
							key={idx}
							className="flex flex-row justify-between space-y-1 border-b border-gray-300">
							<span>#{mention.name}</span>
							<span>{mention.percentage}%</span>
						</div>
					))}
					{mentions.length == 0 && <span>No mentions found</span>}
				</div>
			</div>
			<div className="border bg-gray-100 p-5 rounded-md text-center">
				<span className="text-xl font-semibold font-gray-900">
					Best Performing Media
				</span>
				<div className="flex flex-col mt-2">
					{medias.map((media, idx) => (
						<div
							key={idx}
							className="flex flex-row justify-between space-y-1 border-b border-gray-300">
							<span>{media.name}</span>
							<span>{media.percentage}%</span>
						</div>
					))}
					{medias.length == 0 && <span>No media found</span>}
				</div>
			</div>
		</div>
	);
}

export default BestPerformingSection;
