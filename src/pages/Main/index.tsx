import React from 'react';
import {Carousel} from "react-bootstrap";

import useIsMobile from "../../utils/hooks/useIsMobile";
import GoogleMap from "../../components/GoogleMap";

import logo from '../../assets/images/logo.jpg';
import jakuzee from '../../assets/images/3.Carousel.jpg';
import house from '../../assets/images/1.Carousel.jpg';
import comfort from '../../assets/images/comfort2.jpg'
import spa2 from '../../assets/images/spa2.jpg';
import korica from '../../assets/images/korica.jpg';

import './styles.scss';
import Reservation from "../../components/Reservation/Reservation";
import ReserveLabel from "../../components/Reservation/ReserveLabel";

const Home = () => {
	const isMobile = useIsMobile();

	return (
		<section>
			<Carousel slide={false}>
				<Carousel.Item>
					<img
						className="d-block w-100 cover vh-100"
						style={{objectFit: "cover"}}
						src={logo}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 vh-100"
						src={isMobile ? jakuzee : korica}
						style={{objectFit: "cover"}}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100 vh-100"
						src={house}
						style={{objectFit: "cover"}}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
			<article className="mt-5 mb-5 w-75 m-auto d-flex flex-column">
				<h4 className="fw-bold text-center">
					КЪЩА ЗА ГОСТИ
					<span className="ms-1 me-1 text-success d-block">"СТАНОВЕЦ"</span>
					ВИ ПРИВЕТСТВА С ДОБРЕ ДОШЛИ!
				</h4>
				<i className="fa-solid fa-minus text-center text-secondary"></i>

				<p className="text-center mt-4 mt-md-5">За вашето добро настроение, отмора и почивка в Лудогорието.</p>

				<div className="text-center mt-5 mt-md-0 d-flex flex-column flex-md-row justify-content-center">
					<div className={`${isMobile ? 'w-100' : 'w-25'} text-center mt-3 me-3 mt-md-5 d-flex flex-column`}>
						<i className="fa-solid fa-leaf fs-5 text-success"></i>
						<p className="mt-2 mb-0">НИЕ ВИ ПРЕДЛАГАМЕ</p>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<p className="opacity-75 fs-6">
							Отмора и приятна почивка, сред прекрасна панорамна гледка, заобиколени от ниски хълмове
							обрасли с широколистни гори.
						</p>
					</div>
					<div className={`${isMobile ? 'w-100' : 'w-25'} text-center mt-3 me-3 mt-md-5 d-flex flex-column`}>
						<i className="fa-solid fa-people-roof text-success fs-5"/>
						<p className="mt-2 mb-0">УДОБСТВА</p>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<p className="opacity-75 fs-6">
							Къщата разполага с 4 стаи за гости с баня и тоалетна към всяка една,
							една двойка, една четворка и две тройки, голяма вътрешна и външна механа,
							оборудвана кухня, газово барбекю и стандартно на дърва, басейн (за летния сезон).
						</p>
					</div>
					<div className={`${isMobile ? 'w-100' : 'w-25'} text-center mt-3 me-3 mt-md-5 d-flex flex-column`}>
						<i className="fa-solid fa-comment text-success fs-5"/>
						<p className="mt-2 mb-0">РАЗВЛЕЧЕНИЯ</p>
						<i className="fa-solid fa-minus text-center text-secondary"></i>
						<p className="opacity-75 fs-6">
							За развлечение ви предлагаме СПА зона, която включва инфрачервена сауна,
							хидромасажна вана за двама, външно японско джакузи и система за питейна алкална,
							“жива”вода.
						</p>
					</div>
				</div>
			</article>

			<article className="bg-success w-100" style={{height: '100px'}}/>

			<article className="mt-5 mb-5 w-75 m-auto d-flex flex-column align-items-center">
				<h4 className="text-center">НАШАТА ЛОКАЦИЯ</h4>
				<i className="fa-solid fa-minus text-center text-secondary"></i>
				<div className={`${!isMobile && 'w-75'} mt-3 text-center`}>Щастливи сме да ви поканим в новооткрита,
					самостоятелна къща за гости в
					село Становец, община Хитрино, намиращо се всред широколистните гори на Воеводското плато, на 400м
					надморска височина, в Лудогорието! На разстояние:
					<ul className="d-flex flex-wrap mt-3 justify-content-center">
						<li className="me-4">38 км от Шумен.</li>
						<li className="me-4">60 км от Разград.</li>
						<li className="me-4">65 км от Търговище.</li>
						<li className="me-4">85 км от Силистра.</li>
						<li className="me-4">95 км от Добрич.</li>
						<li className="me-4">110км от Варна.</li>
						<li className="me-4">130 км от Русе.</li>
					</ul>
				</div>
			</article>

			<GoogleMap/>

			<article className="d-flex flex-column align-items-center mb-3 p-5">
				<h4>ЗАПОВЯДАЙТЕ ПРИ НАС</h4>
				<i className="fa-solid fa-minus text-center text-secondary"></i>
				<p className="text-center">
					Щастливи сме да ви поканим в новооткрита, самостоятелна къща за гости в село Становец,
				</p>
				<div className="d-flex flex-column flex-md-row justify-content-between">
					<div className="m-3 overflow-hidden d-flex flex-column">
						<img style={{height: '400px'}} className="hover-zoom" src={jakuzee} alt="jakuzee"/>
					</div>
					<div className="m-3 overflow-hidden d-flex flex-column">
						<img style={{height: '400px'}} className="hover-zoom" src={comfort} alt="jakuzee"/>
					</div>
					<div className="m-3 overflow-hidden d-flex flex-column">
						<img style={{height: '400px'}} className="hover-zoom" src={spa2} alt="jakuzee"/>
					</div>
				</div>
			</article>

			<div className="text-center mb-5 d-flex flex-column">
				<h3>Форма за обратна връзка</h3>
				<i className="fa-solid fa-minus text-center text-secondary mb-4"></i>
				<div
					className="d-flex flex-column align-items-center align-items-md-start justify-content-md-center flex-md-row gap-5 flex-md-grow-1 flex-md-shrink-1 mx-5">
					<ReserveLabel />
					<Reservation />
				</div>
			</div>

		</section>
	);
};

export default Home;