import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
// import { Link } from "react-router-dom";
import Homeimg from "../Images/team.jpg";

const Team = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section id="team" className="team">
			<div className="container-fluid">
				<div className="container">
					<div className="section-title">
						<h5>TEAM</h5>
						<h2>CHECK OUR TEAM</h2>
					</div>

					<div className="row m-0">
						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="100">
								<div className="member-img">
									<img src={Homeimg} className="img-fluid" alt="img" />
									<div className="social">
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>Walter White</h4>
									<span>Chief Executive Officer</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="200">
								<div className="member-img">
									<img src={Homeimg} className="img-fluid" alt="img" />
									<div className="social">
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>Sarah Jhonson</h4>
									<span>Product Manager</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="300">
								<div className="member-img">
									<img src={Homeimg} className="img-fluid" alt="img" />
									<div className="social">
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>William Anderson</h4>
									<span>CTO</span>
								</div>
							</div>
						</div>

						<div className="col-lg-3 col-md-6 d-flex align-items-stretch">
							<div className="member" data-aos="fade-up" data-aos-delay="400">
								<div className="member-img">
									<img src={Homeimg} className="img-fluid" alt="img" />
									<div class="social">
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
										<a href="###">
											<i>
												<AiFillTwitterCircle />
											</i>
										</a>
									</div>
								</div>
								<div className="member-info">
									<h4>Amanda Jepson</h4>
									<span>Accountant</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Team;
