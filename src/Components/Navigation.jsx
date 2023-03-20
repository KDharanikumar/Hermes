import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
// import Clients from "../Pages/Clients";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Team from "../Pages/Team";
import Enquiry from "./Enquiry";

const Navigation = () => {
	return (
		<section className="navigation">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="enquiry" element={<Enquiry />} />
				<Route path="aboutus" element={<About />} />
				<Route path="services" element={<Services />} />
				{/* <Route path="clients" element={<Clients />} /> */}
				<Route path="team" element={<Team />} />
				<Route path="contact" element={<Contact />} />
			</Routes>
		</section>
	);
};

export default Navigation;
