import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderIcon from '../assets/icon.svg';
import './styles/Header.css';

function Header(props) {
	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (theme === 'light') {
			document.body.style.setProperty('--bg', '#fff');
			document.body.style.setProperty('--font-color', '#000');
		} else {
			document.body.style.setProperty('--bg', '#000');
			document.body.style.setProperty('--font-color', '#fff');
		}
	}, [theme]);

	return (
		<React.Fragment>
			<header className='header'>
				<Link to='/' className='header__home'>
					<img src={HeaderIcon} alt='Icon Header' />
				</Link>
				<div className='header__details'>
					<ul>
						<li className='details--item'>
							<Link to='/contact/'>Contact</Link>
						</li>
						<li className='details--item'>
							<a href='https://rickandmortyapi.com/' target='_blank' rel='noreferrer'>
								Api
							</a>
						</li>
					</ul>
					<label className='header__switch'>
						<input
							type='checkbox'
							onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
						/>
						<span className='switch__slideBar'></span>
					</label>
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
