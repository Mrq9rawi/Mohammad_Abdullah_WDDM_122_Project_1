/* eslint-disable no-eval */
import React from "react";
import styles from "../css/modules/gallery.module.css";

let imgGalleryOne = require("../img/gallery-01.png");
let imgGalleryTwo = require("../img/gallery-02.png");
let imgGalleryThree = require("../img/gallery-03.jpg");
let imgGalleryFour = require("../img/gallery-04.png");
let imgGalleryFive = require("../img/gallery-05.jpg");
let imgGallerySix = require("../img/gallery-06.png");

export default function Article(props) {
	return (
		<div className={styles.box}>
			<div className={styles["img-holder"]}>
				<img className={styles.img} src={eval(props.img.src)} alt="" />
			</div>
		</div>
	);
}
