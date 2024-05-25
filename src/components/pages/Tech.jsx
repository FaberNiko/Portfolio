import React, { useEffect } from "react";
import AOS from "aos";
import "../sass/Tech.scss";
import "aos/dist/aos.css";
import SvgIcons from "../SvgIcons";

function Tech() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<section className="tech-section section" id="tech">
			<div className="line"></div>
			<h2 className="tech-section__title" data-aos="fade-down">Technologies</h2>
			<div className="tech-section__container" data-aos="fade-up">
				<ul className="tech-list" >
					<li className="tech-list__item">React</li>
					<li className="tech-list__item">JavaScript</li>
					<li className="tech-list__item">HTML</li>
					<li className="tech-list__item">CSS (SASS)</li>
					<li className="tech-list__item">Git</li>
					<li className="tech-list__item">SQL</li>
				</ul>
				<div className="images" >
					<SvgIcons />
				</div>
			</div>
		</section>
	);
}

export default Tech;
