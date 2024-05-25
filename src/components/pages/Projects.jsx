import React, { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../sass/Projects.scss";

function Projects() {

	useEffect(() => {
		AOS.init({ duration: 800 });
	}, []);

	return (
		<section className="projects-section section" id="projects">
			<div className="line"></div>
			<h2 className="projects-section__title">projects</h2>
			<div className="projects-section__container">
				<div className="cards cards-box">
					<span className="cards__title" data-aos="fade-left">
						Pizzeria
					</span>
					<a
						href="https://faberniko.github.io/PizzeriaItaliano/"
						target="blank" data-aos="fade-left">
						<div className="card card--one">
							<div className="card__shadow"></div>
						</div>
					</a>
					<p className="about-project" data-aos="fade-left">
						PizzeriaItaliano is my first project I've ever created. Design was
						invented by myself. It is a simple website for an Italian pizzeria.
					</p>
					<span className="list-title" data-aos="fade-left">
						Technologies
					</span>
					<ul className="list" data-aos="fade-left">
						<li className="list__item">HTML</li>
						<li className="list__item">CSS, SASS</li>
						<li className="list__item">JavaScript</li>
					</ul>
					<span className="list-title" data-aos="fade-left">
						Features
					</span>
					<ul className="list" data-aos="fade-left">
						<li className="list__item">Responsive Navbar</li>
						<li className="list__item">Responsive Images</li>
						<li className="list__item">Mobile-First</li>
						<li className="list__item">BEM Methodology</li>
					</ul>

					<div className="links" data-aos="fade-left">


						<a
							href="https://github.com/FaberNiko/PizzeriaItaliano"
							target="blank" >
							<i class="fa-brands fa-github"></i>
						</a>
						<a
							href="https://faberniko.github.io/PizzeriaItaliano/"
							target="blank">
							<i class="fa-solid fa-globe"></i>
						</a>
					</div>
					<div className="vertical-line" data-aos="zoom-in"></div>

					<span className="cards__title" data-aos="fade-right">Góral Shoes</span>
					<a
						href="https://faberniko.github.io/goral/"
						target="blank"
						data-aos="fade-right">
						<div className="card card--two">
							<div className="card__shadow"></div>
						</div>
					</a>
					<p className="about-project" data-aos="fade-right">
						GóralShoes is a project of website that I've created for my family business. The layout was my own idea. In this project I've used mixins and compontents in SASS. I've took care about mobile-first principle. Website is also responsive.  
					</p>
					<span className="list-title" data-aos="fade-right">
						Technologies
					</span>

					<ul className="list" data-aos="fade-right">
						<li className="list__item">HTML</li>
						<li className="list__item">CSS, SASS</li>
						<li className="list__item">JavaScript</li>
					</ul>
					<span className="list-title" data-aos="fade-right">
						Features
					</span>
					<ul className="list" data-aos="fade-right">
						<li className="list__item">Responsive Navbar</li>
						<li className="list__item">Responsive Images</li>
						<li className="list__item">Mobile-First</li>
						<li className="list__item">BEM Methodology</li>
					</ul>

					<div className="links" data-aos="fade-right">
						<a href="https://github.com/FaberNiko/goral" target="blank">
							<i class="fa-brands fa-github"></i>
						</a>
						<a href="https://faberniko.github.io/goral/" target="blank">
							<i class="fa-solid fa-globe"></i>
						</a>
					</div>
				</div>
			</div>
			<div className="line"></div>
		</section>
	);
}

export default Projects;
