import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Clients from "../Components/AboutClients";
import Aboutimg from "../Images/about.jpg";

const About = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="about" className="about">
			<div className="container-fluid">
				<div className="container mb-5">
					<div className="row">
						<div className="section-title">
							<h5>ABOUT</h5>
							<h2>ABOUT US</h2>
						</div>
						<div className="col-lg-6 col-md">
							<img src={Aboutimg} data-aos="fade-right" alt="about-img" />
						</div>
						<div className="col-lg-6 col-md about-content">
							<div data-aos="fade-left">
								<h3 className="mb-4">About Hermes</h3>
								<p>
									Established in 2015, Hermes is a leading workforce solutions provider that has successfully managed the end-to-end HR needs of over
									20 clients across more than 5 industry sectors since its inception.
								</p>
								<p>
									Specializing in contract management, policy framework development, and wage standardization, Hermes has collaborated with numerous
									corporations, playing a pivotal role in their day-to-day operations. We take pride in being selected by corporate entities for
									critical assignments and studies. Our team comprises professionals from diverse industries, ensuring the timely delivery of
									projects.
								</p>
								<p>
									At Hermes, we are dedicated to transforming lives and nurturing career management. Discover how we can support your business journey
									by contacting us at +91-9150856050 or emailing <span className="text-primary">hermesfacilityservices@gmail.com.</span>
								</p>
							</div>
						</div>
					</div>
					<div className="py-5">
						<Clients />
					</div>
				</div>
			</div>
		</section>
	);
};
export default About;
