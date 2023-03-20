// import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
	return (
		<footer id="footer">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-6 footer-contact">
							<h2>HERMES</h2>
							<p>
								A108 Adam Street <br />
								New York, NY 535022
								<br />
								United States <br />
								<br />
								<strong>Phone : </strong> +1 5589 55488 55
								<br />
								<strong>Email : </strong> info@example.com
								<br />
							</p>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h3>Useful Links</h3>
							<ul>
								<li>
									<a href="/">
										<span>{">"}</span>Home
									</a>
								</li>
								<li>
									<a href="aboutus">
										<span>{">"}</span>About us
									</a>
								</li>
								<li>
									<a href="services">
										<span>{">"}</span>Services
									</a>
								</li>
								<li>
									<a href="clients">
										<span>{">"}</span>Clients
									</a>
								</li>
								<li>
									<a href="contact">
										<span>{">"}</span>Contact
									</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-4 col-md-6 footer-links">
							<h3>Our Services</h3>
							<ul>
								<li>
									<a href="###">
										<span>{">"}</span>Web Development
									</a>
								</li>
								<li>
									<a href="###">
										<span>{">"}</span>Product Management
									</a>
								</li>
								<li>
									<a href="###">
										<span>{">"}</span>Marketing
									</a>
								</li>
								<li>
									<a href="###">
										<span>{">"}</span>Graphic Design
									</a>
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
							<a href="https://www.google.com/" target="_blank" style={{ color: "#FF5D30" }} rel="noreferrer">
								Starflit
							</a>
						</strong>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
