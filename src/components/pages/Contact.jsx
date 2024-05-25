import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import "../sass/Contact.scss";

function Contact() {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);

	const hanldeChange = e => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const hanldeSubmit = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_wol7grj",
				"template_rw9e5pp",
				{
					from_name: form.name,
					to_name: "Nikodem",
					from_email: form.email,
					to_email: "nikodem.faber.praca1@gmail.com",
					message: form.message,
				},
				"mY0ESB2UoGzn9f-a2"
			)
			.then(() => {
				setLoading(false);
				alert("Thank you. I will get back to you ass soon as possible");
				setForm({
					name: "",
					email: "",
					message: "",
				});
			}),
			error => {
				setLoading(false);

				console.log(error);
				alert("Something went wrong.");
			};
	};
	return (
		<section className="section contact-section" id="contact" >
			<h2 className="contact-section__title" data-aos="fade-left">Contact</h2>
			<div className="form-box" data-aos="fade-left">
				<form ref={formRef} onSubmit={hanldeSubmit} className="contact-form">
					<label>
						<span>Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={hanldeChange}
							placeholder="What's your name?"
						/>
					</label>
					<label>
						<span>Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={hanldeChange}
							placeholder="What's your email?"
						/>
					</label>
					<label>
						<span>Your Message</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={hanldeChange}
							placeholder="What do you want to say?"
						/>
					</label>
					<button type="submit">{loading ? "Sending..." : "Send"}</button>
				</form>
			</div>
			<div className="links" >
				<i class="fa-brands fa-github"><a href="https://github.com/FaberNiko" target="blank"> github.com</a></i>
				<i class="fa-brands fa-linkedin"><a href="https://www.linkedin.com/in/nikodem-faber-b00832244/" target="blank"> linkedin.com</a> </i>
			</div>
	
		</section>
	);
}

export default Contact;
