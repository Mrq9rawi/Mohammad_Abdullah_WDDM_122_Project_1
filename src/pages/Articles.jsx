import React from "react";
import styles from "../css/modules/articles.module.css";
import articlesImages from "../json/articles.json";
import Article from "../components/Article";

const articlesComp = articlesImages.map((img) => {
	return <Article key={img.id} img={img} />;
});

export default function Articles() {
	return (
		<section className={styles.articles} id="articles">
			<h2 className="special-heading">Articles</h2>
			<div className={`container ${styles.container}`}>{articlesComp}</div>
		</section>
	);
}
