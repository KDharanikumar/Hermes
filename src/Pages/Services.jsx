import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaCity, FaPeopleArrows, FaUsersCog, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="services" className="services">
			<div className="container" data-aos="fade-up">
				<div className="section-title" data-aos="fade-up">
					<h5>SERVICES</h5>
					<h2>HERMES SERVICES</h2>
				</div>
				<ul className="nav nav-tabs row m-0 gy-4 d-flex">
					<li className="nav-item col-6 col-md-4 col-lg-3">
						<Link className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
							<icon>
								<FaPeopleArrows />
							</icon>
							<h4>General Staffing</h4>
						</Link>
					</li>

					<li className="nav-item col-6 col-md-4 col-lg-3">
						<Link className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
							<icon>
								<FaUserTie />
							</icon>
							<h4>Permanent Recruitment</h4>
						</Link>
					</li>

					<li className="nav-item col-6 col-md-4 col-lg-3">
						<Link className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
							<icon>
								<FaCity />
							</icon>
							<h4>Facility Management</h4>
						</Link>
					</li>

					<li className="nav-item col-6 col-md-4 col-lg-3">
						<Link className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
							<icon>
								<FaUsersCog />
							</icon>
							<h4>Apprentice Hiring</h4>
						</Link>
					</li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane active show" id="tab-1">
						<div className="row m-0 gy-4">
							<div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
								<h3 className="mb-3">General Staffing</h3>
								<p className="fst-italic">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<ul>
									<li>
										<icon></icon> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</li>
									<li>
										<icon></icon> Duis aute irure dolor in reprehenderit in voluptate velit.
									</li>
									<li>
										<icon></icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
										storacalaperda mastiro dolore eu fugiat nulla pariatur.
									</li>
								</ul>
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum
								</p>
							</div>
							<div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
								<img src="assets/img/features-1.svg" alt="" className="img-fluid" />
							</div>
						</div>
					</div>

					<div className="tab-pane" id="tab-2">
						<div className="row m-0 gy-4">
							<div className="col-lg-8 order-2 order-lg-1">
								<h3 className="mb-3">Permanent Recruitment</h3>
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum
								</p>
								<p className="fst-italic">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<ul>
									<li>
										<icon></icon> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</li>
									<li>
										<icon></icon> Duis aute irure dolor in reprehenderit in voluptate velit.
									</li>
									<li>
										<i className="bi bi-check-circle-fill"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor
										voluptate nisi sed.
									</li>
									<li>
										<icon></icon> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
										storacalaperda mastiro dolore eu fugiat nulla pariatur.
									</li>
								</ul>
							</div>
							<div className="col-lg-4 order-1 order-lg-2 text-center">
								<img src="assets/img/features-2.svg" alt="" className="img-fluid" />
							</div>
						</div>
					</div>

					<div className="tab-pane" id="tab-3">
						<div className="row m-0 gy-4">
							<div className="col-lg-8 order-2 order-lg-1">
								<h3 className="mb-3">Facility Management</h3>
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum
								</p>
								<ul>
									<li>
										<icon></icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</li>
									<li>
										<icon></icon> Duis aute irure dolor in reprehenderit in voluptate velit.
									</li>
									<li>
										<icon></icon> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
									</li>
								</ul>
								<p className="fst-italic">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</div>
							<div className="col-lg-4 order-1 order-lg-2 text-center">
								<img src="assets/img/features-3.svg" alt="" className="img-fluid" />
							</div>
						</div>
					</div>

					<div className="tab-pane" id="tab-4">
						<div className="row m-0 gy-4">
							<div className="col-lg-8 order-2 order-lg-1">
								<h3 className="mb-3">Apprentice Hiring</h3>
								<p>
									Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
									est laborum
								</p>
								<p className="fst-italic">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
								<ul>
									<li>
										<icon></icon> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</li>
									<li>
										<icon></icon> Duis aute irure dolor in reprehenderit in voluptate velit.
									</li>
									<li>
										<icon></icon>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta
										storacalaperda mastiro dolore eu fugiat nulla pariatur.
									</li>
								</ul>
							</div>
							<div className="col-lg-4 order-1 order-lg-2 text-center">
								<img src="assets/img/features-4.svg" alt="" className="img-fluid" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Services;
