import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [activeLink, setActiveLink] = useState("/");

	const handleSetActiveLink = (link) => {
		setActiveLink(link);
	};
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<div>
					<Link to="/" className="navbar-brand" style={{ color: "#FF5D30" }} onClick={() => handleSetActiveLink("/")}>
						HERMES
					</Link>
				</div>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end pe-5" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className={`nav-item ${activeLink === "/" ? "active" : ""}`}>
							<Link to="/" className="nav-link" aria-current="page" onClick={() => handleSetActiveLink("/")}>
								HOME
							</Link>
						</li>
						<li className={`nav-item ${activeLink === "/aboutus" ? "active" : ""}`}>
							<Link className="nav-link" to="/aboutus" onClick={() => handleSetActiveLink("/aboutus")}>
								ABOUT
							</Link>
						</li>

						<li className={`nav-item ${activeLink === "/services" ? "active" : ""}`}>
							<Link className="nav-link" to="/services" onClick={() => handleSetActiveLink("/services")}>
								SERVICES
							</Link>
						</li>

						<li className={`nav-item ${activeLink === "/clients" ? "active" : ""}`}>
							<Link className="nav-link" to="/clients" onClick={() => handleSetActiveLink("/clients")}>
								CLIENTS
							</Link>
						</li>

						{/* <li className={`nav-item ${activeLink === "/team" ? "active" : ""}`}>
							<Link className="nav-link" to="/team" onClick={() => handleSetActiveLink("/team")}>
								TEAM
							</Link>
						</li> */}

						<li className={`nav-item ${activeLink === "/contact" ? "active" : ""}`}>
							<Link className="nav-link" to="/contact" onClick={() => handleSetActiveLink("/contact")}>
								CONTACT
							</Link>
						</li>
					</ul>
					<Link to="contact" className="nav-item text-center me-5">
						<button type="submit">GET STARTED</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
