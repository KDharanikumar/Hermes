import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiSupport } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import BenefitsImg from "../Images/Benefits.png";

const Benefits = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section>
			<div className="container-fluid">
				<div className="container benefits">
					<div className="row">
						<div className="section-title" data-aos="fade-up">
							<h5>KEY BENEFITS</h5>
							<h2>KEY BENEFITS OF HAPPY ASSOCIATE PROGRAM</h2>
						</div>
						<div className="col d-flex flex-wrap justify-content-center align-items-center">
							<div className="col-lg-7 col-md">
								<img src={BenefitsImg} alt="Benefits-img" data-aos="fade-up" />
							</div>
							<div className="col-lg-5 col-md" data-aos="fade-down">
								<div className="icon-box" data-aos="fade-up">
									<i>
										<BsCashCoin style={{ color: "f72585" }} />
									</i>
									<p>Self-Service - Payslips, PF, ESIC, TDS, Leave, Reimbursements</p>
								</div>

								<div className="icon-box" data-aos="fade-down">
									<i>
										<RiBillLine style={{ color: "4361ee" }} />
									</i>
									<p>Insurance, Mediclaim, Welfare Events</p>
								</div>

								<div className="icon-box" data-aos="fade-up">
									<i>
										<GoLaw style={{ color: "ffd60a" }} />
									</i>
									<p>100% Statutory & Regulatory Compliance</p>
								</div>

								<div className="icon-box" data-aos="fade-down">
									<i>
										<BiSupport style={{ color: "0ead69" }} />
									</i>
									<p>Immediate Query Resolution under our "Then & There" philosophy</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Benefits;
