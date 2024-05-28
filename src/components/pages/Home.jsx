import { useEffect } from "react";
import "../sass/Home.scss";
import AOS from 'aos'
import 'aos/dist/aos.css'


function Home  ()  {
	useEffect(() => {
        AOS.init({duration: 2000})
    },[])
	return (
		<section className="home-section" id="home" >
			<div className="shadow"></div>
			<div className="home"  >
				<h1 className="home__title">
					Hi, I’m <span>Nikodem</span>, a creative developer
				</h1>
				<p>
					I am a Junior Frontend Developer with passion for creating modern and
					responsive websites.
				</p>
				<a href="#about">
					<button>
						<i className="fa-solid fa-arrow-down"></i>
					</button>
				</a>
			</div>
			<div className="line"></div>
		</section>
	);
};

export default Home
