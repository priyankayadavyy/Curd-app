import React from "react";

const Cantact = () => {
  return (
    <>
      <div className="container my-4">
        <div className="dragArea form-row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <h4 className="mbr-fonts-style display-2 align-left pb-4">
              <strong>Contact Us</strong>
            </h4>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12"></div>
          <div
            data-for="name"
            className="col-lg-12 col-md-12 col-sm-12 form-group"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              data-form-field="name"
              className="form-control display-7"
              value=""
              id="name-contacts08-a"
            />
          </div>
          <div
            data-for="email"
            className="col-lg-6 col-md-12 col-sm-12 form-group"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              data-form-field="email"
              className="form-control display-7"
              value=""
              id="email-contacts08-a"
            />
          </div>
          <div
            data-for="phone"
            className="col-lg-6 col-md-12 col-sm-12 form-group"
          >
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              data-form-field="phone"
              className="form-control display-7"
              value=""
              id="phone-contacts08-a"
            />
          </div>
          <div
            data-for="message"
            className="col-lg-12 col-md-12 col-sm-12 form-group"
          >
            <textarea
              name="message"
              placeholder="Message"
              data-form-field="message"
              className="form-control display-7"
              id="message-contacts08-a"
            ></textarea>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-lg btn-success display-7">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cantact;
