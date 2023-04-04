const Enquiry = () => {
	return (
		<section className="enquiry">
			<div className="container py-5">
				<div className="section-title">
					<h5>ENQUIRY</h5>
					<h2>PLEASE FILL DETAILS</h2>
				</div>
				<div className="row my-5">
					<div className="col-lg mt-4 mt-lg-0">
						<form className="contact-form">
							<div className="row">
								<div className="col-md-6 form-group">
									<input type="text" className="form-control" Name="name" id="name" placeholder="You Name" required />
								</div>
								<div className="col-md-6 form-group mt-3 mt-md-0">
									<input type="email" className="form-control" Name="email" id="email" placeholder="Your Email" required />
								</div>
							</div>
							<div className="form-group mt-3">
								<input type="text" className="form-control" Name="subject" id="subject" placeholder="Subject" required />
							</div>
							<div className="form-group mt-3">
								<textarea className="form-control" Name="message" rows="5" placeholder="Message" required></textarea>
							</div>
							<div className="text-center">
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Enquiry;
