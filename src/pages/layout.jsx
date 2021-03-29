import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

function Layout(props) {
	return (
		<React.Fragment>
			<Header />
			<Hero />
			{props.children}
		</React.Fragment>
	);
}

export default Layout;
