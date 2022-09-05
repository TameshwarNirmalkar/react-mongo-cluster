import { FormEvent, useState } from "react";

const ContactContainer = () => {
  const [formEl, setFormEl] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormEl({ ...formEl, [name]: value });
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Value: ", formEl);
  };

  return (
    <>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Get In touch</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                <form onSubmit={onFormSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required={true}
                          data-error="Name is required."
                          onChange={onInputChange}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          data-error="Valid email is required."
                          required={true}
                          onChange={onInputChange}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          data-error="Subject is required."
                          required={true}
                          onChange={onInputChange}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          data-error="Phone is required."
                          required={true}
                          onChange={onInputChange}
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <textarea
                          placeholder="Your Mesaage"
                          name="message"
                          data-error="Please, leave us a message."
                          required={true}
                          onChange={onInputChange}
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-md-12">
                      <div className="single-form form-group text-center">
                        <button type="submit" className="main-btn">
                          send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactContainer;
