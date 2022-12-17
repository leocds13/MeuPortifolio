import { useEffect } from 'react';
import { Cover } from './Components/Templates/Cover';
import { TopRightMenu } from './Components/Templates/TopRightMenu';
import { About } from './Components/Templates/About';
import { Knowledge } from './Components/Templates/Knowledge';
import { Projects } from './Components/Templates/Projects';
import { Menu } from './Components/Templates/Menu';

import './App.css'

function App() {

	useEffect(() => {
		document.getElementsByTagName('body')[0].className = `bg-light-background dark:bg-dark-background`;
	}, []);

	return (
		<div className={`text-light-text dark:text-dark-text`} id="top">
			<Cover />
			<TopRightMenu />

			<div className='mx-24 mt-8'>
				<About />
				<Knowledge />
				<Projects />
			</div>

			<Menu />
		</div>
	)
}

export default App
