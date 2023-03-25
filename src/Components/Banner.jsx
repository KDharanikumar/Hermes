import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCity, FaPeopleArrows, FaUsersCog, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="hero" className="d-flex align-items-center justify-content-center">
			<div className="container-fluid">
				<div className="container" data-aos="fade-up">
					<div className="row m-0 justify-content-center text-center mt-3" data-aos="fade-up" data-aos-delay="150">
						<div className="col-lg-6">
							<h1>
								Grow your business with <span>Hermes</span>
							</h1>
							<div className="d-flex justify-content-center">
								<h2 className="me-3">
									People
									<span style={{ color: "#ff4a17" }}> |</span> Process
								</h2>
							</div>
						</div>

						<Link to="enquiry" className="nav-item text-center mt-4">
							<button type="submit">SEND ENQUIRY</button>
						</Link>
					</div>

					<div className="row my-3 mx-0 p-0 gy-4 mt-4 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
						<div className="col-lg-3">
							<div className="icon-box">
								<icon>
									<FaPeopleArrows />
								</icon>
								<h3>General Staffing</h3>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="icon-box">
								<icon>
									<FaUserTie />
								</icon>
								<h3>Permanent Recruitment</h3>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="icon-box">
								<icon>
									<FaCity />
								</icon>
								<h3>Facility Management</h3>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="icon-box">
								<icon>
									<FaUsersCog />
								</icon>
								<h3>Apprentice Hiring</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Banner;
