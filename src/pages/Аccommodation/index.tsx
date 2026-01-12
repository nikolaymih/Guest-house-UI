import React from 'react';
import {Button, Table} from "react-bootstrap";

import useIsMobile from "../../utils/hooks/useIsMobile";
import GallerySection from "../../components/GallerySections";
import Reservation from "../../components/Reservation/Reservation";
import PricesTable from "../../components/PricesTable/PricesTable";
import {useNavigate} from "react-router-dom";

const Accommodation = () => {
	const isMobile = useIsMobile();
	const navigate = useNavigate();

	return (
		<section className="gallery pt-5 pb-5">
			<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-75">
				<p>Начало/Настаняване/Цяла Къща</p>
				<h2 className="text-center">Цяла Къща</h2>
				<article className="d-flex flex-column flex-md-row align-items-start mt-4">
					<article className={`${isMobile ? 'w-100' : 'w-50'}`}>
						<GallerySection galleryType="rooms" thumbnailPosition="left"/>
					</article>
					<article className={`${isMobile ? 'w-100 mt-3' : 'w-50'} ms-md-5`}>
						<div className="d-flex flex-row justify-content-end align-items-center">
							<div className="text-end">
								<Button size="lg" onClick={() => navigate('/reservation')} className="bg-danger border-white mb-2">Резервирай</Button>
							</div>
						</div>
						<div className="d-flex mt-2 text-center fs-6">
							<div className="border w-100">
								<p>ГОСТИ</p>
								<p className="align-middle">10 + 2</p>
							</div>
							<div className="border w-100">
								<p>СПАЛНИ</p>
								<p>4</p>
							</div>
							<div className="border w-100">
								<p>БАНИ</p>
								<p>4</p>
							</div>
						</div>
						<div className="mt-5 table-responsive">
							<h6 className="mb-3 fw-bold">КЪЩАТА се отдава винаги САМОСТОЯТЕЛНО на следните цени:</h6>
							<PricesTable />
							<p className="mb-0">Цените са в евро / лева, с включено ДДС и туристическа такса.</p>
							<p className="mb-0">15% отстъпка за нощувки от ПОНЕДЕЛНИК до ЧЕТВЪРТЪК.</p>
							<p className="mb-0">5% отстъпка при ранна резервация, без право на анулиране.</p>
						</div>
					</article>
				</article>
				<article>
					<p className='mt-5'>Къща за гости “Становец” ви приветства🫶🏻Къщата разполага с 4 стаи за гости с
						баня и
						тоалетна към всяка една, една двойка, една четворка и две тройки, голяма вътрешна и външна
						механа,
						оборудвана кухня, газово барбекю и стандартно на дърва, басейн (за летния сезон), СПА зона и
						прекрасна панорамна гледка🧖‍♀️🧖
						Сигурно се питате какво включва СПА зоната??🤷🏼‍♀️
						💁🏼‍♀️СПА зоната включва инфрачервена сауна, хидромасажна вана за двама, външно японско джакузи и
						система за питейна алкална, “жива”вода.
						Направете подобаващи вашите празници, колективни събирания или просто отпускащ уикенд с приятели
						и
						семейство.
					</p>
					<p>️Цените не се отнасят за официални празници‼️</p>
				</article>

				<article>
					<h2 className="text-center mb-4">Запитване за резервация.</h2>
					<Reservation/>
				</article>

			</article>

		</section>
	);
};

export default Accommodation;