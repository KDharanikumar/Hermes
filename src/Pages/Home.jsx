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
			<div>
				<Banner />
				<Counter />
				<StaffingServices />
				<Benefits />
				<Process />
				<Industries />
			</div>
		</section>
	);
};
export default Home;
