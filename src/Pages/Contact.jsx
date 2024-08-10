import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HiLocationMarker, HiOutlineMail, HiPhone } from "react-icons/hi";
import Swal from 'sweetalert2';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "aeb40b5a-23ba-4800-9b88-a654bf561574");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Good job!",
        text: "Your Form has been Submitted Successfully!",
        icon: "success"
      });
      // setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.639268529488!2d80.00592417507359!3d12.801911387498068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ4JzA2LjkiTiA4MMKwMDAnMzAuNiJF!5e0!3m2!1sen!2sin!4v1723224608056!5m2!1sen!2sin"
          frameborder="0"
          allowfullscreen=""
          loading="lazy"
          title="Starflit"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                      <p className="fw-bold">Plot No.18, Sakthi Nagar, Sattamangalam, Maraimalai Nagar, Tamilnadu - 603 209</p>
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
                      <h6>contact@hermesfacility.com</h6>
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
                      <h6>+91-9150856050</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <form className="form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" className="form-control" name="Name" placeholder="Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="Email" placeholder="Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="Subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea type="text" className="form-control" name="Message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center">
                  <button name="Name" type="submit">Send Message</button>
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
