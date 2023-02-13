import React from 'react';
import { HomeBanner } from 'Components/HomeBanner';
import Head from 'next/head';
import { Header } from 'Components/Header';

export const index = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			{/* <Header /> */}
			<HomeBanner />
		</>
	);
};

export default index;
