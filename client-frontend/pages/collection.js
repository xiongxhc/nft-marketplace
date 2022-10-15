import NavbarTwo from "../components/Layout/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CollectionArea from "../components/Collection/CollectionArea";
import InvolvedArea from "../components/Common/InvolvedArea";
import Footer from "../components/Layout/Footer";
import Copyright from "../components/Common/Copyright";
import baseUrl from "../utils/baseUrl";

const Collection = ({ data, contDt }) => {
	return (
		<>
			<NavbarTwo />
			<PageBanner
				bannerHeading="Recent Collection"
				parentTitle="Pages"
				pageTitle="Collection"
				bg="inner-bg11"
			/>
			<CollectionArea data={data} dataCount={contDt} />
			<InvolvedArea />
			<Footer />
			<Copyright />
		</>
	);
};

export async function getServerSideProps(context) {
	const { page, size } = context.query;

	const contData = await fetch(`${baseUrl}/nfts/count`);
	const contDt = await contData.json();

	const res = await fetch(
		`${baseUrl}/nfts?_start=${
			page ? parseInt(page) - 1 * 2 + 1 : 0
		}&_limit=${size ? parseInt(size) : 2}`
	);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data, contDt }, // will be passed to the page component as props
	};
}

export default Collection;
