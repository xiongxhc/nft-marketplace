import Link from "next/link";
import CountDown from "./CountDown";

const CollectionCard = ({
	data: {
		name,
		cryptoCost,
		cryptoType,
		auctionImg,
		itemOwnerPhoto,
		auctionEnds,
		slug,
	},
}) => {
	// console.log(auctionImg);
	return (
		<>
			<div className="col-lg-4 col-md-6">
				<div className="featured-card box-shadow">
					<div className="featured-card-img">
						<Link href={`/nft/${slug}`}>
							<a>
								<img src={auctionImg.url} alt="Images" />
							</a>
						</Link>
						<p>
							<i className="ri-heart-line"></i> 122
						</p>
						{auctionEnds && <CountDown auctionEnds={auctionEnds} />}
						<button
							type="button"
							className="default-btn border-radius-5"
						>
							Place Bid
						</button>
					</div>

					<div className="content">
						<h3>
							<Link href={`/nft/${slug}`}>
								<a>{name}</a>
							</Link>
						</h3>
						<div className="content-in">
							<div className="featured-card-left">
								<span>100 ETH 12/14</span>
								<h4>Bid 80 ETH </h4>
							</div>
							<Link href={`/nft/${slug}`}>
								<a className="featured-content-btn">
									<i className="ri-arrow-right-line"></i>
								</a>
							</Link>
						</div>
						<a
							href="author-profile.html"
							className="featured-user-option"
						>
							<img
								src="../images/featured/featured-user1.jpg"
								alt="Images"
							/>
							<span>Created by @Adison</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default CollectionCard;
