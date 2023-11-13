import React from 'react';

const ReserveLabel = () => {
	return (
		<section className="main-contacts-form d-flex flex-column mb-5 m-auto">
			<div className="main-contacts-address d-flex flex-column align-items-center m-auto">
				<div className="card w-100 p-4 shadow d-flex flex-column align-items-center">
					<i className="fa-solid fa-location-dot fs-2"></i>
					<h6 className="fs-4 mt-2">Адрес</h6>
					<p className="mt-3 fs-6">Село Становец, Община Хитрино, област Шумен.</p>
				</div>
			</div>

			<div className="d-flex flex-column align-items-center gap-md-5 flex-md-row">
				<div className="card w-75 p-4 shadow mt-4">
					<i className="fa-solid fa-envelope fs-2"></i>
					<h6 className="fs-4 mt-2">Имейл</h6>
					<p className="mt-3 fs-6">stanovets.eu@gmail.com</p>
				</div>

				<div className="card w-75 p-4 shadow mt-4">
					<i className="fa-solid fa-phone fs-2"></i>
					<h6 className="fs-4 mt-2">Телефон</h6>
					<p className="mt-3 fs-6">+359885771328</p>
				</div>
			</div>
		</section>
	);
};

export default ReserveLabel;