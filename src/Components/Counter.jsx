import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BsClock, BsEmojiSmile, BsFileEarmarkBarGraphFill, BsPeople } from "react-icons/bs";
import { animated, useSpring } from "react-spring";

function Number({ n }) {
	const { number } = useSpring({
		from: { number: 0 },
		number: n,
		delay: 400,
		config: { mass: 1, tension: 20, friction: 10 },
	});
	return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

const Counter = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="counts" className="counts">
			<div className="container" data-aos="fade-up">
				<div className="row">
					<div className="col-lg-3 col-md-6 mt-lg-0">
						<div className="count-box">
							<i>
								<BsEmojiSmile />
							</i>
							<span>
								<Number n={8} />
							</span>
							<p>Happy Clients</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
						<div className="count-box">
							<i>
								<BsFileEarmarkBarGraphFill />
							</i>
							<span>
								<Number n={100} />
							</span>
							<p>Projects</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
						<div className="count-box">
							<i>
								<BsClock />
							</i>
							<span>
								<Number n={100} />
							</span>
							<p>Years of experience</p>
						</div>
					</div>

					<div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
						<div className="count-box">
							<i>
								<BsPeople />
							</i>
							<span>
								<Number n={500} />
							</span>
							<p>Hard Workers</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Counter;