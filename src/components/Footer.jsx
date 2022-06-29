import React from "react";
import imgGalleryOne from "../img/gallery-01.png";
import imgGalleryTwo from "../img/gallery-02.png";
import imgGalleryThree from "../img/gallery-03.jpg";
import imgGalleryFour from "../img/gallery-04.png";
import imgGalleryFive from "../img/gallery-05.jpg";
import imgGallerySix from "../img/gallery-06.png";

export default function Footer() {
	return (
		<>
			<div class="container">
				<div class="text-content">
					<h3>Mohammad</h3>
					<div class="social">
						<a href="#" class="facebook">
							<i class="fa-brands fa-facebook-f"></i>
						</a>
						<a href="#" class="twitter">
							<i class="fa-brands fa-twitter"></i>
						</a>
						<a href="#" class="youtube">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem,
						dignissimos iste aspernatur
					</p>
				</div>
				<ul class="links">
					<li>
						<i class="fa-solid fa-angles-right"></i>
						<a href="#">Important link 1</a>
					</li>
					<li>
						<i class="fa-solid fa-angles-right"></i>
						<a href="#">Important link 2</a>
					</li>
					<li>
						<i class="fa-solid fa-angles-right"></i>
						<a href="#">Important link 3</a>
					</li>
					<li>
						<i class="fa-solid fa-angles-right"></i>
						<a href="#">Important link 4</a>
					</li>
					<li>
						<i class="fa-solid fa-angles-right"></i>
						<a href="#">Important link 5</a>
					</li>
				</ul>
				<div class="info">
					<div class="address">
						<i class="fa-solid fa-location-dot fa-2x"></i>
						<p>164 York Mills Rd, North York, ON, Canada</p>
					</div>
					<div class="hours">
						<i class="fa-regular fa-clock fa-2x"></i>
						<p>Business Hours: From 8:00 To 16:00</p>
					</div>
					<div class="phone">
						<i class="fa-solid fa-phone-volume fa-2x"></i>
						<p>+1 (647) 575-6094</p>
					</div>
				</div>
				<div class="images">
					<img src={imgGalleryOne} alt="" />
					<img src={imgGalleryTwo} alt="" />
					<img src={imgGalleryThree} alt="" />
					<img src={imgGalleryFour} alt="" />
					<img src={imgGalleryFive} alt="" />
					<img src={imgGallerySix} alt="" />
				</div>
			</div>
			<h4 class="copy">Made With &#60;3 By Mohammad</h4>
		</>
	);
}
