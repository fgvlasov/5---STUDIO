import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormTwo = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mxdohie",
        "template_z5cioqm",
        form.current,
        "jpLEXw_LKyA6GgI_U"
      )
      .then(
        (result) => {
          console.log(result);

          setShowAlert(true);
          setIsMessageSent(true);

          setTimeout(() => {
            setShowAlert(false);
          }, 4000);
        },
        (error) => {
          console.log(error.text);

          setIsMessageSent(false);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="row">
        <div className="col-lg-6">
          <Input name="name" label="Name" isClear={isMessageSent} />
        </div>
        <div className="col-lg-6">
          <Input
            name="email"
            label="Email"
            type="email"
            isClear={isMessageSent}
          />
        </div>
        <div className="col-lg-6">
          <Input name="company" label="Company" isClear={isMessageSent} />
        </div>
        <div className="col-lg-6">
          <Input name="phone" label="Phone" isClear={isMessageSent} />
        </div>
        <div className="col-lg-12">
          <Input
            name="message"
            label="Message"
            type="textarea"
            isClear={isMessageSent}
          />
        </div>
        <div className="col-lg-12">
          <div className="form-group text-end mb--0">
            <button className="axil-button btn-large btn-transparent text-end">
              <span className="button-text">Send Message</span>
              <span className="button-icon" />
            </button>
          </div>
        </div>
      </div>
      {showAlert && (
        <Alert
          message={
            isMessageSent
              ? "Your message was sent successfully"
              : "Something went wrong"
          }
          type={isMessageSent ? "success" : "danger"}
        />
      )}
    </form>
  );
};

export default ContactFormTwo;
