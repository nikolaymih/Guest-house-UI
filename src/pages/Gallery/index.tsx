import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Nav} from "react-bootstrap";

import NavItem from "../../components/Layout/NavBar/NavItem/NavItem";
import {galleryImageLinks} from "../../constants";
import GallerySection from "../../components/GallerySections";

import './styles.scss';

const Gallery = () => {
	return (
		<section className="gallery pt-5 pb-5">
			<article className="card rounded-2 mt-md-5 p-5 shadow m-auto gallery-card-wrapper w-50">
				<p>Начало/Галерия</p>
				<h2 className="text-center">Галерия</h2>
				<div className="d-flex flex-column flex-md-row mb-5">
					{galleryImageLinks.map((item, index) => {
						return (
							<Nav key={index} className="mt-md-5">
								<NavItem
									type={item.type as 'link' | 'dropdown'}
									name={item.name}
									path={item.path}
									iconName={item.iconName}
								/>
							</Nav>
						)
					})}
				</div>

				<Routes>
					<Route path="garden/" element={<GallerySection galleryType="garden" />}/>
					<Route path="tavern/" element={<GallerySection galleryType="tavern"/>}/>
					<Route path="spa/" element={<GallerySection galleryType="spa"/>}/>
					<Route path="rooms/" element={<GallerySection galleryType="rooms"/>}/>
					<Route index element={<GallerySection galleryType="garden"/>}/>
				</Routes>
			</article>
		</section>
	);
};

export default Gallery;