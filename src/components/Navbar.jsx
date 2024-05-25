import React, { useState } from "react";
import {motion} from "framer-motion"
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.scss";
;

export const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
	setMenuOpen(!menuOpen)
}

	return (
		<header className="header">
			<nav className="nav">
				<button className="nav__toggle" id="nav-toggle" onClick={setMenuOpen}>
					<IoMenu />
				</button>
				<a href="#home" className="nav__logo">
					Niko<span>Dev</span>
				</a>

				<div
					className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
					id="nav-menu">
					<ul className="nav__list">
						<li className="nav__item">
							<a href="#home" className="nav__link" onClick={toggleMenu}>
								Home
							</a>
						</li>
						<li className="nav__item">
							<a href="#about" className="nav__link" onClick={toggleMenu}>
								About
							</a>
						</li>
						<li className="nav__item">
							<a href="#tech" className="nav__link" onClick={toggleMenu}>
								technologies
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#projects"
								className="nav__link"
								onClick={toggleMenu}>
								Projects
							</a>
						</li>
						<li className="nav__item">
							<a href="#contact" className="nav__link" onClick={toggleMenu}>
								Contact
							</a>
						</li>
						<button className="nav__close" id="nav-close" onClick={toggleMenu}>
							<IoClose />
						</button>
					</ul>
				</div>
			</nav>
		</header> 
	);
};

export default Navbar





