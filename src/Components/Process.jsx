import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ResourceManagement from "../Images/Resource Management.png";
import StatutoryManagement from "../Images/Statutory Management.png";

const Process = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section>
			<div className="container-fluid">
				<div className="container p-0 process">
					<div className="row">
						<div className="section-title">
							<h5>PROCESS</h5>
							<h2>LABOUR PROCESS</h2>
						</div>
						<div className="d-flex flex-wrap justify-content-center align-items-center">
							<div className="col-lg col-md-6">
								<img src={ResourceManagement} alt="img" data-aos="fade-right" />
							</div>
							<vl className="vl d-none d-lg-block"></vl>
							<div className="col-lg col-md-6">
								<img src={StatutoryManagement} alt="img" data-aos="fade-left" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Process;
