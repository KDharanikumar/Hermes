import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import { useEffect } from "react";
import Engineering from "../Lottie/Engineering.json";
import FMCD from "../Lottie/FMCD.json";
import Healthcare from "../Lottie/Healthcare.json";
import Infrastructure from "../Lottie/Infrastructure.json";
import Logistics from "../Lottie/Logistics.json";
import Telecom from "../Lottie/Telecom.json";

const Industries = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section>
			<div className="container-fluid mb-5">
				<div className="container industries">
					<div className="row">
						<div className="section-title">
							<h5>INDUSTRIES</h5>
							<h2>INDUSTRIES WE SERVE</h2>
						</div>
						<div className="d-flex flex-wrap justify-content-between align-items-center text-center">
							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Engineering} data-aos="fade-up" />
								<p data-aos="fade-down">
									Engineering <br /> Manufacturing
								</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Infrastructure} data-aos="fade-up" />
								<p data-aos="fade-down">Infrastructure</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={FMCD} data-aos="fade-up" />
								<p data-aos="fade-down">FMCG & FMCD</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Telecom} data-aos="fade-up" />
								<p data-aos="fade-down">Telecom</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Logistics} data-aos="fade-up" />
								<p data-aos="fade-down">Logistics</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Healthcare} data-aos="fade-up" />
								<p data-aos="fade-down">Healthcare</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Industries;
