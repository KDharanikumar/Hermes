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
									At Hermes, we specialize in providing comprehensive general staffing solutions tailored to meet the dynamic needs of businesses
									across diverse industries. With a proven track record of excellence, we assist companies in sourcing, selecting, and deploying
									talented individuals who align perfectly with their organizational goals.
								</p>

								<h5>Our General Staffing Services Include:</h5>
								<ul>
									<li>
										<icon></icon>
										<span className="fw-bold">1. Temporary Staffing Solutions : </span> Whether you need short-term support for seasonal peaks or
										project-based assignments, our temporary staffing services offer flexible solutions to meet your immediate workforce requirements.
									</li>
									<li>
										<icon></icon>
										<span className="fw-bold">2. Permanent Staffing Solutions : </span> Finding the right talent for permanent positions is crucial
										for long-term success. Our rigorous recruitment processes ensure that we identify candidates who not only possess the required
										skills but also fit seamlessly into your company culture.
									</li>
									<li>
										<icon></icon>
										<span className="fw-bold">3. Contract Staffing Solutions : </span>For specialized projects or specific time-bound needs, our
										contract staffing services provide access to skilled professionals who can contribute immediately and effectively to your
										projects.
									</li>
									<li>
										<icon></icon>
										<span className="fw-bold">4. Recruitment Process Outsourcing (RPO) : </span>Simplify your hiring processes with our RPO services.
										We manage the entire recruitment lifecycle—from sourcing and screening to onboarding—allowing you to focus on your core business
										activities.
									</li>
								</ul>
								<p>
									Let's Start Building Your Dream Team Partner with Hermes today and experience the difference our general staffing solutions can make
									to your business. Contact us at +91-9150856050 or email us at hermesfacilityservices@gmail.com to discuss how we can support your
									staffing needs and drive your business forward.
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
								<p className="fst-italic">
									Welcome to Hermes, your trusted partner in permanent staffing solutions. We specialize in connecting businesses with top-tier talent
									for long-term success. With our extensive network and industry expertise, we streamline the recruitment process to ensure you find
									the perfect fit for your team.
								</p>
								<h5>Why Choose Hermes for Permanent Recruitment?</h5>

								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Specialized Expertise : </span> Our team of recruitment specialists understands the
										nuances of different industries and functions, allowing us to identify candidates who not only meet the technical requirements but
										also align with your company culture and values.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Comprehensive Screening Process : </span> We conduct rigorous assessments and
										interviews to evaluate candidates thoroughly, ensuring you receive qualified professionals who are prepared to contribute from day
										one
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Tailored Solutions : </span> Whether you're looking to fill executive positions,
										technical roles, or administrative positions, our customized recruitment solutions are designed to meet your specific hiring
										needs.
									</li>
								</ul>

								<h5>Our Approach to Permanent Recruitment:</h5>

								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Consultation and Needs Assessment : </span>We start by understanding your company's
										goals, culture, and the specific requirements of the role you're looking to fill.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Candidate Sourcing and Screening : </span> Leveraging our extensive database, networks,
										and proactive sourcing strategies, we identify and attract candidates who possess the skills and experience that match your
										criteria.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Interview and Selection : </span> We conduct in-depth interviews and assessments to
										evaluate candidates based on technical competencies, soft skills, and cultural fit.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">4. Offer Management and Onboarding Support : </span> Once the ideal candidate is
										identified, we assist with offer negotiations and provide support throughout the onboarding process to ensure a smooth transition.
									</li>
								</ul>
								<p>
									Discover how our permanent recruitment services can help you build a talented and dedicated team that drives your organization's
									success. Contact us at 91-9150856050 or email us at hermesfacilityservices@gmail.com to discuss your hiring needs and start the
									journey towards finding your next great hire.
								</p>
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
								<p className="fst-italic">
									Welcome to Hermes, your reliable partner in facility management staffing solutions. We specialize in providing skilled personnel to
									support the seamless operation and maintenance of your facilities, ensuring efficiency, safety, and compliance.
								</p>
								<h5>Our Facility Management Staffing Services Include:</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Maintenance Technicians : </span> Highly trained professionals capable of maintaining
										and repairing mechanical, electrical, and plumbing systems to keep your facilities running smoothly.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Housekeeping and Janitorial Staff : </span> Dedicated personnel for cleaning services,
										ensuring cleanliness and sanitation standards are met to create a safe and comfortable environment.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Security Personnel : </span> Trained security guards and personnel to safeguard your
										premises, assets, and personnel, providing peace of mind and protection against potential threats.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">4. Administrative Support : </span> Efficient administrative staff to handle
										facility-related documentation, scheduling, and coordination, ensuring operational efficiency.
									</li>
								</ul>

								<h5>Why Choose Hermes for Facility Management Staffing?</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Industry Expertise : </span> With years of experience in facility management staffing,
										we understand the specific needs and challenges of different types of facilities, from commercial buildings to industrial
										complexes.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Quality Assurance : </span> Our rigorous screening and training processes ensure that
										we provide skilled professionals who are competent, reliable, and committed to maintaining high standards of service.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Customized Solutions : </span> We tailor our staffing solutions to meet your unique
										requirements, whether you need short-term support for a project or ongoing staffing for daily operations.
									</li>
								</ul>

								<h5>Our Approach to Facility Management Staffing:</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Needs Assessment : </span> We collaborate closely with you to understand your facility
										management needs, operational goals, and budgetary considerations.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Candidate Selection : </span> Leveraging our extensive network and recruitment
										expertise, we identify and recruit candidates who possess the technical skills and interpersonal qualities necessary for effective
										facility management.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Training and Support : </span> We provide comprehensive training and support to ensure
										our personnel are equipped to perform their duties effectively and safely.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">4. Continuous Improvement : </span> We maintain regular communication and performance
										evaluations to continuously improve our services and address any evolving needs.
									</li>
								</ul>
								<p>
									Experience the difference our facility management staffing solutions can make to your operations. Contact us at +91-9150856050 or
									email us at hermesfacilityservices@gmail.com to discuss how we can support your facility management staffing needs and optimize your
									facility's performance.
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
								<p className="fst-italic">
									Welcome to Hermes, your trusted partner in apprentice hiring solutions. We specialize in connecting businesses with enthusiastic
									individuals eager to learn and contribute to your organization's success through apprenticeship programs.
								</p>
								<h5>Our Apprentice Hiring Services Include:</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Recruitment and Placement : </span> We assist businesses in recruiting and placing
										apprentices in various industries, ensuring they receive practical training and hands-on experience under the guidance of
										experienced mentors.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Program Management : </span> We manage the administrative aspects of apprenticeship
										programs, including registration, compliance with regulations, and coordination between employers and educational institutions.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Skill Development : </span> We emphasize skill development and professional growth by
										matching apprentices with opportunities that align with their career aspirations and learning objectives.
									</li>
								</ul>

								<h5>Why Choose Hermes for Apprentice Hiring?</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Industry Connections : </span> With a robust network and deep industry knowledge, we
										connect businesses with talented individuals who are passionate about starting their careers through apprenticeship programs.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Comprehensive Support : </span> From recruitment to program management and ongoing
										support, we provide end-to-end solutions to ensure a smooth and successful apprenticeship experience.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Commitment to Quality : </span> We prioritize quality in our candidate selection
										process, ensuring apprentices possess the right skills, attitude, and commitment to contribute effectively to your organization.
									</li>
								</ul>

								<h5>Our Approach to Apprentice Hiring:</h5>
								<ul>
									<li>
										<icon></icon> <span className="fw-bold">1. Needs Assessment : </span> We work closely with your team to understand your
										apprenticeship requirements, industry standards, and training objectives.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">2. Candidate Matching : </span> Leveraging our database and recruitment expertise, we
										identify and recommend apprentices who are well-suited to your organization's culture and job requirements.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">3. Support and Monitoring : </span> We provide ongoing support to both apprentices and
										employers, monitoring progress, providing feedback, and addressing any challenges that may arise during the apprenticeship period.
									</li>
									<li>
										<icon></icon> <span className="fw-bold">4. Long-term Partnership : </span> We aim to build long-term partnerships with businesses
										and apprentices, fostering a culture of learning and growth that benefits both parties.
									</li>
								</ul>
								<p>
									Start building a skilled workforce of the future with our apprentice hiring solutions. Contact us at +91-9150856050 or email us at
									hermesfacilityservices@gmail.com to discuss how we can assist you in hiring apprentices and driving your organization's success
									through training and development.
								</p>
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
