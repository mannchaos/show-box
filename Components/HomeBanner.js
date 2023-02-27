import React from 'react';
import HomeBannerStyle from '../src/styles/Components/HomeBanner.module.css';
import Image from 'next/image';

export const HomeBanner = () => {
	// const axios = require('axios');

	// const options = {
	// 	method: 'GET',
	// 	url: 'https://netflix54.p.rapidapi.com/search/',
	// 	params: {
	// 		query: 'stranger',
	// 		offset: '0',
	// 		limit_titles: '50',
	// 		limit_suggestions: '20',
	// 		lang: 'en',
	// 	},
	// 	headers: {
	// 		'X-RapidAPI-Key': '7c772cb93emsh09e5227681a62cap1e0823jsn9bb5aedf72bb',
	// 		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
	// 	},
	// };

	// axios
	// 	.request(options)
	// 	.then(function (response) {
	// 		console.log(response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error);
	// 	});
	return (
		<>
			<div className={`${HomeBannerStyle.mainBox}`}>
				<div className={`${HomeBannerStyle.mainBox__img}`}>
					<img src="/images/homeBanner-1.jpg" alt="banner" />
				</div>
				<div className={HomeBannerStyle.movie__info}>
					<p className={HomeBannerStyle.movie__info__title}>La La Land</p>
					<div className={HomeBannerStyle.movie__info__details}>
						<p>Romance, Drama</p>
						<div>
							<Image src="/images/calendar.png" width={16} height={16} alt="calender-icon" />
							<p>2019</p>
						</div>
					</div>
					<div className={HomeBannerStyle.movie__info__type}>
						<p>Movie</p>
					</div>
				</div>
				<div className={HomeBannerStyle.movie__content}>
					<p>
						<span>Director</span> Damien Chazell
					</p>
					<p>
						<span>Stars</span> Emma Stone, Ryan Gosline
					</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi id laudantium ipsum autem architecto mollitia eveniet voluptate a fugiat.</p>
				</div>
			</div>
		</>
	);
};
