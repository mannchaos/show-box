import React from 'react';
import HomeBannerStyle from '../src/styles/Components/HomeBanner.module.css';
import Image from 'next/image';

export const HomeBanner = () => {
	return (
		<>
			<div className={`${HomeBannerStyle.mainBox}`}>
				<Image
					src="/images/homeBanner-1.jpg"
					fill
					sizes="(max-width : 1920px) 100%,
				(height: 100%)"
				/>
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
						<p>Tv Show</p>
					</div>
				</div>
			</div>
		</>
	);
};
