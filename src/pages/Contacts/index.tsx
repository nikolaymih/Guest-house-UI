import React from 'react';

import GoogleMap from "../../components/GoogleMap";
import ReserveLabel from "../../components/Reservation/ReserveLabel";
import FacebookCard from "../../components/FacebookCard/FacebookCard";
import {Link} from "react-router-dom";

const Contacts = () => {
	return (
		<section>
			<section className="gallery pt-5 pb-5">
				<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-50">
					<h2 className="text-center mb-5">Контакти</h2>

					<ReserveLabel/>
					<article className="d-flex align-items-center flex-column flex-md-row mb-5">
						<p className="w-75 text-center">Ако имате въпроси или нужда от допълнителна информация, можете
							да се свържете с нас чрез <Link to={'/reservation'}>формата за контакт</Link>, на телефон
							(+359) 8885 771 328, или чрез нашите социални мрежи.</p>
						<div className="ms-3">
							<p className="text-center text-md-start">Нашата Facebook страница:</p>
							<FacebookCard/>
						</div>
					</article>
					<GoogleMap/>
				</article>
			</section>
		</section>
	);
};

export default Contacts;