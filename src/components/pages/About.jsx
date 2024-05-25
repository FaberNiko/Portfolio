import React, { useEffect } from "react";
import "../sass/About.scss";
import myPhoto from "../img/ja.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from "framer-motion"
function About  ()  {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])
 
    return (
        <section  className="about-section section" id="about">
          <div className="line"></div>
            <h2 className="about-section__title" data-aos="fade-left">About me</h2>
            <div className="about-section__container" data-aos="fade-right">
                <img className="photo" src={myPhoto} alt="photo of myself" />
                <p className="about-text">Hi! I'm Nikodem, a junior fronted developer based in Poland ( Cracow ) currently looking for a full-time job. I am fast learning person and I want to get my first commercial experience and gain as much knowledge as I can. </p>
                <a href="#tech"><button className="show-tech">tech stack</button></a>
            </div>
        </section>
    )
}

export default About