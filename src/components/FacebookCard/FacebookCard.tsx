import React from 'react';
import {FacebookIcon, FacebookShareButton} from "react-share";
import axios from "axios";

import logo from "../../assets/images/logo.jpg";

const facebookShareURL = 'https://www.facebook.com/profile.php?id=100088378700640';
const url = `https://graph.facebook.com/${import.meta.env.VITE_FB_PAGE_ID}?fields=fan_count,followers_count&access_token=${import.meta.env.VITE_FB_ACCESS_TOKEN}`;

type pageInfo = {
	id: number;
	fan_count: number;
	followers_count: number;
};

const FacebookCard = () => {
	const [pageInfo, setPageInfo] = React.useState<{ fan_count: number, followers_count: number } | null>();

	React.useEffect(() => {
		axios.get<pageInfo>(url)
			.then((data) => setPageInfo({
				fan_count: data.data.fan_count,
				followers_count: data.data.followers_count
			}))
	}, [])

	//handlers
	const openFacebookPage = () => {
		window.open(facebookShareURL, '_blank')
	}
	return (
		<section className="footer-fb-card mt-3 mt d-flex flex-column justify-content-between">
			<div className="d-flex">
				<img onClick={openFacebookPage} className="footer-fb-logo" src={logo} alt="fb page"/>
				<div className="text-light fw-bold m-1">
					<p onClick={openFacebookPage} className="m-0 footer-fb-header fw-bold">Становец</p>
					{pageInfo?.fan_count && <p className="m-0 text-light footer-pageInfo">{pageInfo?.fan_count} харесвания</p>}
					{pageInfo?.followers_count && <p className="m-0 text-light footer-pageInfo">{pageInfo?.followers_count} последователи</p>}
				</div>
			</div>
			<div className="d-flex align-items-center mb-2 ms-2">
				{/*<p>Следване на страницата</p>*/}
				<FacebookShareButton className="align-middle p-1 footer-fb-share-btn fw-bold" url={facebookShareURL}>
					<FacebookIcon className="me-1" size={16} />
					<span className="fw-6">Споделяне</span>
				</FacebookShareButton>
			</div>
		</section>
	);
};

export default FacebookCard;