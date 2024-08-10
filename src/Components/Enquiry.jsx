import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';

const Enquiry = () => {

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
    <section className="enquiry">
      <div className="container py-5">
        <div className="section-title">
          <h5>ENQUIRY</h5>
          <h2>PLEASE FILL DETAILS</h2>
        </div>
        <div className="row my-5">
          <div className="col-lg mt-4 mt-lg-0">
            <form className="form" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" className="form-control" Name="Name" id="name" placeholder="You Name" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" Name="Email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" Name="Subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" Name="Message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div className="text-center">
                <button name="Name" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Enquiry;
