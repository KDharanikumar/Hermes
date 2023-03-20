import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid p-0 m-0">
				<div>
					<Link to="/" className="navbar-brand">
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
				<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								HOME
							</Link>
						</li>
						<li className="nav-item">
							<Link to="aboutus" className="nav-link active" aria-current="page">
								ABOUT
							</Link>
						</li>

						<li className="nav-item">
							<Link to="services" className="nav-link active" aria-current="page">
								SERVICES
							</Link>
						</li>

						{/* <li className="nav-item">
							<Link to="clients" className="nav-link active" aria-current="page">
								Clients
							</Link>
						</li> */}
						<li className="nav-item">
							<Link to="team" className="nav-link active" aria-current="page">
								TEAM
							</Link>
						</li>
						<li className="nav-item">
							<Link to="contact" className="nav-link active" aria-current="page">
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
