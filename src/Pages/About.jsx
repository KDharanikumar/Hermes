import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import Clients from "../Components/AboutClients";
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
					<div className="section-title">
						<h5>ABOUT</h5>
						<h2>ABOUT US</h2>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-12 col-sm-12">
							<img src={Aboutimg} data-aos="fade-right" alt="about-img" />
						</div>
						<div className="col-lg-6 ps-5 col-md-12 col-sm-12 about-content">
							<div data-aos="fade-left">
								<h3 className="mb-3">About Hermes</h3>
								<p>
									Established in 2004, Hermes is a leading workforce solutions provider having fulfilled end-to-end HR
									needs of 50+ customers spread across 10+ industry sectors since inception.
								</p>
								<p>
									Hermes an HR support company in contract Management, Policy Frame work and Wage standardization is
									known to have worked with various corporates and has been a catalyst in running their day to day
									operations. We take pride in mentioning that we have been specifically handpicked by corporate for
									crucial assignments and studies. Driven by professionals from various industries Hermes is known for
									its delivery of projects on time. As a company we are focused at changing lives and mentoring career
									management.
								</p>
								<p>
									To know more about how we can help in your business journey, please call us at 1800224456 or write to
									us at sales@innov.in.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="container">
					<Clients />
				</div> */}
			</div>
		</section>
	);
};
export default About;
