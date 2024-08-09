import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import IR from "../Images/IR_India.png";
import KR from "../Images/KR_Auto.png";
import Lohmann from "../Images/Lohmann.png";
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
		<section id="about-clients" className="about-clients">
			<div className="container my-5">
				<div className="row">
					<div className="client-logos text-nowrap col-lg col-md-6 d-flex flex-wrap justify-content-between align-items-center text-center">
						<img src={PowerGear} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200" />

						<img src={Reep} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300" />

						<img src={Microtek} className="img-fluid" alt="" data-aos="zoom-in" />

						<img src={Motherson} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100" />

						<img src={SKH} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400" />

						<img src={Vembu} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />

						<img src={Wittur} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />

						<img src={Lohmann} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />

						<img src={KR} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />

						<img src={IR} className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500" />
					</div>
				</div>
			</div>
		</section>
	);
};
export default Clients;
