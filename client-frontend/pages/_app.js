import React, { useState, useEffect } from "react";
import "../public/fonts/remixicon.css";
import "../public/css/bootstrap.min.css";
import "../public/css/style.css";
import "../public/css/responsive.css";
import "@etchteam/next-pagination/dist/index.css";

import GoTop from "../components/Shared/GoTop";
import Loader from "../components/Shared/Loader";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 2000);
	}, []);

	return (
		<>
			<Head>
				<title>React Next NFT Marketplace</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<Component {...pageProps} />

			{/* Preloader */}
			<Loader loading={loading} />

			{/* go top */}
			<GoTop scrollStepInPx="100" delayInMs="10.50" />

			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
}

export default MyApp;
