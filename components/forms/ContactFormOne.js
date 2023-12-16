import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import Alert from "./Alert";
import Input from "./Input";

const ContactFormOne = () => {
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
      <Input name="name" label="Name" isClear={isMessageSent} />
      <Input name="email" label="Email" type="email" isClear={isMessageSent} />
      <Input name="company" label="Company" isClear={isMessageSent} />
      <Input name="phone" label="Phone" isClear={isMessageSent} />
      <div className="form-group">
        <button className="axil-button btn-large btn-transparent w-100">
          <span className="button-text">Get Pricing Now</span>
          <span className="button-icon" />
        </button>
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

export default ContactFormOne;
