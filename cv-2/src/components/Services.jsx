import React from 'react';
import services from '../data/services';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

function Services() {
	return (


// PHẦN GỐC 


		// <div className="py-12">
		// 	<SectionTitle>Our Services</SectionTitle>
		// 	<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
		// 		{services.map(service => (
		// 			<ServiceItem
		// 				key={service.title}
		// 				title={service.title}
		// 				icon={service.icon}
		// 				description={service.description}
		// 			/>
		// 		))}
		// 	</div>
		// </div>

// END PHẦN GỐC 



<section className="py-10 bg-white sm:py-16 lg:py-24 ">
<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8  text-gray-700 dark:text-gray-300">
	<div className="max-w-2xl mx-auto text-center">
		<h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Design Process</h2>
		<p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
	</div>

	<div className="relative mt-12 lg:mt-20">
		<div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
			<img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" />
		</div>

		<div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12 ">

			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Empathize</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>
			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Define</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>
			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Flow & Wireframe</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>
			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Empathize</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>
			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Empathize</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>
			<div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700">Empathize</span>
				</div>
				
				{/* <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Create a free account</h3> */}
				
			</div>

			

			{/* <div>
				<div className="flex items-center justify-center w-24 h-24 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
					<span className="text-xl font-semibold text-gray-700"> Web Dev </span>
				</div>
				<h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">Release & Launch</h3>
				<p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
			</div> */}
		</div>
	</div>
</div>
</section>

	);
}

export default Services;
