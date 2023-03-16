import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle id='About'>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				 I’m Đặng Lai Anh With a background in IT, I have developed a solid foundation
				 in design principles and techniques. I am proficient in design tools such as Adobe
				  and Figma. This ensures that every design 
				  I create is visually appealing and user-friendly. I am passionate about creating meaningful 
				  and impactful designs that improve the user experience and am excited about the opportunity
				   to apply my skills in a professional setting. As an intern with your team, I am committed 
				   to learning and growing as a designer and contributing to your team’s success.
				</p>
				<a href="mailto:prisonerk33@gmail.com" title="" className="inline-flex items-center justify-center px-8 py-2 
				font-semibold text-white transition-all duration-200 bg-emerald-900 rounded-md mt-4
				 hover:bg-blue-700 focus:bg-blue-700" role="button"> Contact Me </a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
