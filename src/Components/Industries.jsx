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
				<div className="container p-0 industries">
					<div className="row">
						<div className="section-title">
							<h5>INDUSTRIES</h5>
							<h2>INDUSTRIES WE SERVE</h2>
						</div>
						<div className="p-0 d-flex flex-wrap justify-content-between align-items-center text-center">
							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Engineering} data-aos="fade-right" />
								<p data-aos="fade-left">
									Engineering <br /> Manufacturing
								</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Infrastructure} data-aos="fade-left" />
								<p data-aos="fade-right">Infrastructure</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={FMCD} data-aos="fade-right" />
								<p data-aos="fade-left">FMCG & FMCD</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Telecom} data-aos="fade-left" />
								<p data-aos="fade-right">Telecom</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Logistics} data-aos="fade-right" />
								<p data-aos="fade-left">Logistics</p>
							</div>

							<div className="col-lg-2 col-md-6 industries-serve">
								<Lottie className="icon" loop={true} animationData={Healthcare} data-aos="fade-left" />
								<p data-aos="fade-right">Healthcare</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Industries;
