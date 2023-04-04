import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Microtek from "../Images/Microtek.JPG";
import Motherson from "../Images/Motherson.png";
import PowerGear from "../Images/PowerGear.png";
import Reep from "../Images/Reep.png";
import SKH from "../Images/SKH.png";
import Vembu from "../Images/Vembu.png";
import Wittur from "../Images/Wittur.png";

const Clients = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="clients" className="clients">
			<div className="container-fluid">
				<div className="container mb-5">
					<div className="section-title" data-aos="fade-up">
						<h5>CLIENTS</h5>
						<h2>CHECK OUR CLIENTS</h2>
					</div>

					<div className="row m-auto" data-aos="fade-down" data-aos-delay="300">
						<div className="col-lg-3 col-md-4">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={PowerGear} alt="PowerGear-Logo"></img>
									<h5>Power Gear Limited</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={Reep} alt="PowerGear-Logo"></img>
									<h5>Reep Industries Limited</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-md-0">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={Microtek} alt="PowerGear-Logo"></img>
									<h5>Microtech–CNC Pvt.Ltd.</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={SKH} alt="PowerGear-Logo"></img>
									<h5>Marelli SKH Exhaust Systems</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={Motherson} alt="PowerGear-Logo"></img>
									<h5>Motherson</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={Vembu} alt="PowerGear-Logo"></img>
									<h5>Vembu Technologies Limited</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={Wittur} alt="PowerGear-Logo"></img>
									<h5>Wittur Elevator Components</h5>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-4 mt-4">
							<div className="icon-box my-lg-4 my-md-2">
								<div>
									<img src={PowerGear} alt="PowerGear-Logo"></img>
									<h5>Rilkn Manufacturing</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Clients;
