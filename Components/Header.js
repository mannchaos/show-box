import React from 'react';
import HeaderStyle from '../src/styles/Components/Header.module.css';
export const Header = () => {
	return (
		<>
			<div className={`${HeaderStyle.header}`}>
				<ul>
					<li>Home</li>
					<li>Movies</li>
					<li>TV Shows</li>
				</ul>
			</div>
		</>
	);
};
