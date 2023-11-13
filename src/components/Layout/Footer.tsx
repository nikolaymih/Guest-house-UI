import React from 'react';
import logo from '../../assets/images/logo.jpg';

import './styles.scss';
import FacebookCard from "../FacebookCard/FacebookCard";

const Footer = () => {
	
	return (
		<section className="footer">
			<article className="mt h-25 text-light p-5" style={{background: "#1B1B1B", color: '#aaaaaa'}}>
				<article className="d-flex flex-column flex-md-row justify-content-around">
					<article>
						<h4 style={{color: "#50A9E1"}}>Къща за гости Становец</h4>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<p>Село Становец, община Хитрино, област Шумен</p>
						<p>
							<span className="fw-bold">Телефон: </span>
							<span>+359885771328</span>
						</p>
						<p>
							<span className="fw-bold">Email: </span>
							<span>stanovets.eu@gmail.com</span>
						</p>
					</article>
					<article>
						<h4 style={{color: "#50A9E1"}}>Удобства</h4>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<ul>
							<li className="mb-2">Starlink интернет</li>
							<li className="mb-2">Спа зона</li>
							<li className="mb-2">Басейн(летен)</li>
							<li className="mb-2">Японско джакузи</li>
						</ul>
					</article>
					<article>
						<h4 style={{color: "#50A9E1"}}>Настаняване</h4>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<ul>
							<li className="mb-2">Цяла къща</li>
							<li className="mb-2">Единична стая</li>
							<li className="mb-2">Тройна стая</li>
							<li className="mb-2">Апартамент за четирима</li>
						</ul>
					</article>
					<article>
						<h4 style={{color: "#50A9E1"}}>Полезни връзки</h4>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<ul>
							<li className="mb-2">За къщата</li>
							<li className="mb-2">Резервации</li>
							<li className="mb-2">Общи Условия</li>
							<li className="mb-2">Политика за поверителност</li>
						</ul>
					</article>

					<FacebookCard />
				</article>
			</article>
			<article className="text-light" style={{background: '#111111'}}>
				<div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
					<p className="m-0 p-3">
						© Copyright {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</article>
		</section>
	);
};

export default Footer;