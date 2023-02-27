import React from 'react';
import RecommendStyle from '../src/styles/Components/Recommend.module.css';
import { MovieCard } from './MovieCard';

export const Recommend = () => {
	return (
		<>
			<div className={RecommendStyle.recommendBox}>
				<p className={RecommendStyle.recommendBox__head}>Recommended</p>
				<div>
					<MovieCard img="/images/spidy.jpg" />
				</div>
			</div>
		</>
	);
};
