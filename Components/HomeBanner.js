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
			</div>
		</>
	);
};
