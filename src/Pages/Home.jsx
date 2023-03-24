import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Banner from "../Components/Banner";
import Benefits from "../Components/Benefits";
import Counter from "../Components/Counter";
import Industries from "../Components/Industries";
import Process from "../Components/Process";
import StaffingServices from "../Components/StaffingServices";

const Home = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<section>
			<div className="container-fluid m-0 p-0">
				<Banner />
			</div>

			<div className="container p-0">
				<div>
					<Counter />
				</div>
				<div>
					<StaffingServices />
				</div>
				<div>
					<Benefits />
				</div>
				<div>
					<Process />
				</div>
				<div>
					<Industries />
				</div>
			</div>
		</section>
	);
};
export default Home;
