import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HiDocumentReport } from "react-icons/hi";
import { MdEditDocument } from "react-icons/md";

const StaffingServices = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section>
			<div className="container-fluid">
				<div className="container staffing-services">
					<div className="section-title">
						<h5>SERVICES</h5>
						<h2>STAFFING SERVICES</h2>
					</div>
					<div className="row">
						<div className="d-flex flex-wrap justify-content-center align-items-center">
							<div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center ">
								<div className="staffing-services-box" data-aos="flip-up" data-aos-delay="200">
									<div className="text-center">
										<div className="icon-round">
											<HiDocumentReport className="icon" />
										</div>
										<div>
											<h4 className="title">General Staffing</h4>
										</div>
										<div>
											<ul>
												<li>Manpower Solutions </li>
												<li>Payroll Outsourcing</li>
												<li>Regulatory Compliances</li>
												<li>Infra Service</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
								<div className="staffing-services-box" data-aos="flip-left" data-aos-delay="300">
									<div className="text-center">
										<div className="icon-round">
											<MdEditDocument className="icon" />
										</div>
										<div>
											<h4 className="title">Permanent Recruitment</h4>
										</div>
										<div>
											<ul>
												<li>Search & Selection</li>
												<li>Recruitment Process Outsourcing</li>
												<li>Vendor On Premises</li>
												<li>Project Hiring</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
								<div className="staffing-services-box" data-aos="flip-right" data-aos-delay="300">
									<div className="text-center">
										<div className="icon-round">
											<MdEditDocument className="icon" />
										</div>
										<div>
											<h4 className="title">Facility Management</h4>
										</div>

										<div>
											<ul className="p-0">
												<li>Soft Services</li>
												<li>Technical Services</li>
												<li>Support Services</li>
												<li>Pest Control Services</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center">
								<div className="staffing-services-box" data-aos="flip-down" data-aos-delay="300">
									<div className="text-center">
										<div className="icon-round">
											<MdEditDocument className="icon" />
										</div>
										<div>
											<h4 className="title">Apprentice Hiring</h4>
										</div>
										<div>
											<ul className="p-0">
												<li>Experiential Learning</li>
												<li>Transition to Full Time</li>
												<li>Recognition</li>
												<li>Protection</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default StaffingServices;
