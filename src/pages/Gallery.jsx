import React from "react";
import styles from "../css/modules/gallery.module.css";
import galleryImgs from "../json/gallery.json";
import GalleryImage from "../components/GalleryImage";

const galleryComp = galleryImgs.map((img) => {
	return <GalleryImage key={img.id} img={img} />;
});

export default function Gallery() {
	return (
		<section className={styles.gallery} id="gallery">
			<h2 className="special-heading">Gallery</h2>
			<div className={`container ${styles.container}`}>{galleryComp}</div>
		</section>
	);
}
