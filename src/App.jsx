import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Tech from "./components/pages/Tech";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Tech />
			<Projects />
			<Contact />
		</>
	);
}

export default App;
