/* eslint-disable no-eval */
import React from "react";
import styles from "../css/modules/articles.module.css";

let articleImageOne = require("../img/cat-01.jpg");
let articleImageTwo = require("../img/cat-02.jpg");
let articleImageThree = require("../img/cat-03.jpg");
let articleImageFour = require("../img/cat-04.jpg");
let articleImageFive = require("../img/cat-05.jpg");
let articleImageSix = require("../img/cat-06.jpg");
let articleImageSeven = require("../img/cat-07.jpg");
let articleImageEight = require("../img/cat-08.jpg");

export default function Article(props) {
	return (
		<div className={styles.box}>
			<img className={styles.img} src={eval(props.img.src)} alt="" />
			<h3 className={styles.img}>Test Title</h3>
			<p className={styles.p}>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
			</p>
			<div className={styles["box-btn"]}>
				<button className={styles.button}>Read More</button>
				<i className="fa-solid fa-arrow-right"></i>
			</div>
		</div>
	);
}
