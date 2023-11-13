import React from 'react';
import ReserveForm from '../../components/Reservation/Reservation'
import GallerySection from "../../components/GallerySections";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import ReserveLabel from "../../components/Reservation/ReserveLabel";

const Reservation = () => {
	const navigate = useNavigate()

	return (
		<section className="gallery pt-5 pb-5">
			<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-50">
				<h2 className="text-center mb-5">Заявка за резервация</h2>
				<p>Къща за гости "Становец" разполага с 4 стаи, СПА център, вътрешна и външна механа, които са комфортни
					и бутиково обзаведени помещения, подходящи за почивка през всеки сезон.</p>
				<div className="mb-5 text-center text-md-start">
					<Button size="lg" onClick={() => navigate('/accommodation')}>Цени</Button>
				</div>

				<article className="mb-5">
					<GallerySection thumbnailPosition="right" galleryType="overview"/>
				</article>
				<article className="mb-5">
					<h3 className="text-center mb-5">Очакваме да се свържете с нас по всички въпроси, които изникнат.</h3>
					<ReserveLabel />
					<ReserveForm/>
				</article>
			</article>
		</section>
	);
};

export default Reservation;