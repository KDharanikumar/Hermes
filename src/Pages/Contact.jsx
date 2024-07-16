import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";

const Contact = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);
	return (
		<section>
			<div className="section-title">
				<h5>CONTACT</h5>
				<h2>CONTACT US</h2>
			</div>

			<div className="container-fluid map p-0 m-0 my-5">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d62255.74999072992!2d79.6415077603236!3d12.77952609132754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x3a52dd3ed66d6515%3A0xf74226e526c3d9ee!2sSTARFLIT%2C%20QMHG%2BRJ6%2C%20Vallalar%20Nagar%2C%20Dusi%20%26%20Dusi%20Post%2C%20Vembakkam%2C%20Taluk%2C%20Tamil%20Nadu%20631702%2C%20India!3m2!1d12.7795284!2d79.6765274!4m0!5e0!3m2!1sen!2sbg!4v1678894565870!5m2!1sen!2sbg"
					frameborder="0"
					allowfullscreen=""
					loading="lazy"
					title="Starflit"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>

			<div id="contact" className="contact mb-5">
				<div className="container m-auto" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-6">
							<div className="row">
								<div className="col-md-12">
									<div className="info-box py-4">
										<div className="mb-2">
											<i>
												<HiLocationMarker className="mb-3" />
											</i>
											<h3>Our Address</h3>
											<p>A108 Adam Street, New York, NY 535022</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="info-box mt-4 py-4">
										<div className="mb-4">
											<i>
												<HiOutlineMail className="mb-3" />
											</i>
											<h3>Email Us</h3>
											<p>info@example.com</p>
										</div>
									</div>
								</div>
								<div className="col-md-6">
									<div className="info-box mt-4 py-4">
										<div className="mb-4">
											<i>
												<HiPhone className="mb-3" />
											</i>
											<h3>Call Us</h3>
											<p>+1 5589 55488 55</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-6 mt-4 mt-lg-0">
							<form method="post" action="send-email.php" className="contact-form">
								<div className="row">
									<div className="col-md-6 form-group">
										<input type="text" className="form-control" name="FullName" id="name" placeholder="You Name" required />
									</div>
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
									</div>
								</div>
								<div className="form-group mt-3">
									<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
								</div>
								<div className="form-group mt-3">
									<textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
								</div>
								<div className="text-center">
									<button type="submit">Send Message</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Contact;
