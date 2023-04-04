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
				<div className="container process">
					<div className="row">
						<div className="section-title">
							<h5>PROCESS</h5>
							<h2>LABOUR PROCESS</h2>
						</div>
						<div className="d-flex flex-wrap justify-content-center align-items-center">
							<div className="col-lg-6 col-md">
								<img src={ResourceManagement} alt="img" data-aos="fade-down" />
							</div>
							{/* <vl className="vl d-none d-lg-block"></vl> */}
							<div className="col-lg-6 col-md">
								<img src={StatutoryManagement} alt="img" data-aos="fade-up" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Process;
