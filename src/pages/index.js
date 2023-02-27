import React from 'react';
import { HomeBanner } from 'Components/HomeBanner';
import Head from 'next/head';
import { Header } from 'Components/Header';
import { Recommend } from 'Components/Recommend';

export const index = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<HomeBanner />
			<Recommend />
		</>
	);
};

export default index;
