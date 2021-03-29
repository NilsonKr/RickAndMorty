import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const updateTheme = theme => {
	if (theme === 'light') {
		document.body.style.setProperty('--bg', '#fff');
		document.body.style.setProperty('--font-color', '#000');
	} else {
		document.body.style.setProperty('--bg', '#000');
		document.body.style.setProperty('--font-color', '#fff');
	}
};

function Layout(props) {
	return (
		<React.Fragment>
			<Header updateTheme={updateTheme} />
			<Hero />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;
