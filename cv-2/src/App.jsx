import React, { useState, useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header'
// import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Works from './components/Works';
import Bedown from './components/Bedown'
import HeroSection from './components/HeroSection';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);		

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed z-10 right-2 top-2 bg-indigo-900 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? '🌙' : '🌞'}
			</button>
			<div className="bg-white dark:bg-slate-900 min-h-screen font-asap ">
		          	<Bedown />
					{/* <Header /> */}
					{/* <HeroSection/> */}
				<div className="max-w-5xl w-11/12 mx-auto">
					{/* <Services/>  */}
					<Works/>
					<About/>
				</div>
				    <Footer/>
			</div>
		</>
	);
}

export default App;
