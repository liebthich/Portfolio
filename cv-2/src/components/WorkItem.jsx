import React from 'react';

function WorkItem({ imgUrl, title, tech, workUrl }) {
	return (
		<a
			href={workUrl}
			target="_blank"
			rel="noreferrer"
			className="bg-gray-900 dark:bg-slate-800 rounded-lg overflow-hidden  border border-slate-500 dark:border-slate-900 hover:border-slate-400"
		>
			<img
				src={imgUrl}
				alt="work"
				className="w-full h-36 md:h-48 object-cover"
			/>
			<div className="w-full p-5 text-gray-900 dark:text-gray-900">
				<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-gray-300">
					{title}
				</h3>
				<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
					{tech.map(item => (
						<span
							key={item}
							className="inline-block px-2 py-1 bg-slate-300 dark:bg-slate-300 rounded-md"
						>
							{item}
						</span>
					))}
				</p>
			</div>
		</a>
	);
}

export default WorkItem;
