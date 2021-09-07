import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Reports as ReportsData } from '../../mockData/Reports';

function Reports() {
	const { results } = ReportsData;

	const people = [
		{
			name: 'Jane Cooper',
			title: 'Regional Paradigm Technician',
			department: 'Optimization',
			role: 'Admin',
			email: 'jane.cooper@example.com',
			image:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
		},
		// More people...
	];

	return (
		<div>
			<Navbar />
			<main className="m-auto max-w-screen-lg">
				<div className="flex justify-between pt-20 items-center">
					<div className="flex items-center">
						<img src="/assets/history-report.png" alt="Report" />
						<span className="text-[#ef6461] font-semibold text-xl ml-2">
							History
						</span>
					</div>
				</div>
				<div className="flex flex-col pt-10">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												No
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Time
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Items
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Actions
											</th>
											<th scope="col" className="relative px-6 py-3">
												<span className="sr-only">Edit</span>
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{results.map((result, idx) => {
											const { id, name, timestamp, posts_id } = result;
											return (
												<tr key={id}>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="text-sm font-medium text-gray-900">
																{idx + 1}
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="text-sm font-medium text-gray-900">
																{name}
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Submitted
														</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="text-sm text-gray-900">
																{new Date(timestamp).toLocaleDateString(
																	'en-US'
																)}
																,{' '}
																{new Date(timestamp).toLocaleTimeString(
																	'en-US'
																)}
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="text-sm text-gray-900">
																{posts_id.length}
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<button className="bg-[#ff6b81] text-white text-sm px-3 py-2 rounded-md">
																View
															</button>
														</div>
													</td>
													{/* <td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{person.title}
														</div>
														<div className="text-sm text-gray-500">
															{person.department}
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Active
														</span>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
														{person.role}
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
														<a
															href="#"
															className="text-indigo-600 hover:text-indigo-900">
															Edit
														</a>
													</td> */}
												</tr>
											);
										})}
										{/* {people.map((person) => (
											<tr key={person.email}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 w-10 rounded-full"
																src={person.image}
																alt=""
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{person.name}
															</div>
															<div className="text-sm text-gray-500">
																{person.email}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{person.title}
													</div>
													<div className="text-sm text-gray-500">
														{person.department}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
														Active
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
													{person.role}
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
													<a
														href="#"
														className="text-indigo-600 hover:text-indigo-900">
														Edit
													</a>
												</td>
											</tr>
										))} */}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Reports;
