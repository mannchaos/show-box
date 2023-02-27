import React from 'react';
import MovieCardStyle from '../src/styles/Components/MovieCard.module.css';

export const MovieCard = (props) => {
	return (
		<>
			<div className={MovieCardStyle.card}>
				<img className={MovieCardStyle.card__img} src={props.img} alt="card-banner" />
			</div>
		</>
	);
};
