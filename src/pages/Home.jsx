import React from "react";
import homeImage from "../img/landing-image.png";
import styles from "../css/modules/home.module.css";

export default function Home() {
	return (
		<section className={styles.landing}>
			<div className={`container ${styles.container}`}>
				<div className={styles.content}>
					<h1 className={styles.h1}>Welcome, To My World</h1>
					<p className={styles.p}>
						Here Iam gonna share with you things that matter fo me. Books I read, Games I Play,
						Stories and Events
					</p>
				</div>
				<img className={styles.img} src={homeImage} alt="" />
			</div>
		</section>
	);
}
