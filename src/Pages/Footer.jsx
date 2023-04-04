// import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="container p-0">
					<div className="row m-0">
						<div className="col-lg-4 col-md footer-contact">
							<h2>HERMES</h2>
							<p>
								A108 Oragadam <br />
								Oragadam, 600 235
								<br />
								Tamil Nadu <br />
								<br />
								<strong>Phone : </strong> +91 00000 00000
								<br />
								<strong>Email : </strong> info@example.com
								<br />
							</p>
						</div>

						<div className="col-lg-4 col-md footer-links">
							<h3>Useful Links</h3>
							<ul>
								<li>
									<Link to="/">
										<span>{">"}</span>Home
									</Link>
								</li>
								<li>
									<Link to="aboutus">
										<span>{">"}</span>About us
									</Link>
								</li>
								<li>
									<Link to="services">
										<span>{">"}</span>Services
									</Link>
								</li>
								<li>
									<Link to="clients">
										<span>{">"}</span>Clients
									</Link>
								</li>
								<li>
									<Link to="contact">
										<span>{">"}</span>Contact
									</Link>
								</li>
							</ul>
						</div>

						<div className="col-lg-4 col-md footer-links">
							<h3>Our Services</h3>
							<ul>
								<li>
									<Link to="services">
										<span>{">"}</span>General Staffing
									</Link>
								</li>
								<li>
									<Link to="services">
										<span>{">"}</span>Permanent Recruitment
									</Link>
								</li>
								<li>
									<Link to="services">
										<span>{">"}</span>Facility Management
									</Link>
								</li>
								<li>
									<Link to="services">
										<span>{">"}</span>Apprentice Hiring
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid footer-bottom">
				<div>
					<div className="copyright mb-2">
						&copy; Copyright
						<strong>
							<span> Hermes</span>
						</strong>
						. All Rights Reserved
					</div>
					<div>
						Designed by
						<strong className="px-2">
							<a href="https://www.youkotech.com/" target="_blank" style={{ color: "#FF5D30" }} rel="noreferrer">
								YoukoTech
							</a>
						</strong>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
