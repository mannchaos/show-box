import React from 'react';
import RecommendStyle from '../src/styles/Components/Recommend.module.css';
import { MovieCard } from './MovieCard';

export const Recommend = () => {
	return (
		<>
			<div className={RecommendStyle.recommendBox}>
				<p className={RecommendStyle.recommendBox__head}>Recommended</p>
				<div className={RecommendStyle.recommendBox__list}>
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
					<MovieCard img="/images/spidy.jpg" title="Spiderman" />
				</div>
			</div>
		</>
	);
};
