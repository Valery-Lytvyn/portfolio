import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AlertMessage from "../alertMessage/AlertMessage";
import Loader from "../loader/Loader";
import { MainColorContext } from "../../App";
import {
  alertMessagesData,
  contactFormData,
  emailsServiceData,
} from "../../constants/contactSectionData";
import "./contactFormComponent.scss";

function ContactFormComponent() {
  const [alertText, setAlertText] = useState<string>("");
  const [isShowLoader, setIsShowLoader] = useState<boolean>(false);
  const mainColor = React.useContext(MainColorContext) as string;
  const formRef = useRef<HTMLFormElement>(null!);

  useEffect(() => {
    if (alertText) {
      const timer = setTimeout(() => {
        setAlertText("");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [alertText]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const nameValue = (
      formRef.current.querySelector('input[name="name"]') as HTMLInputElement
    ).value.trim();
    const emailValue = (
      formRef.current.querySelector('input[name="email"]') as HTMLInputElement
    ).value.trim();
    const messageValue = (
      formRef.current.querySelector(
        'textarea[name="message"]'
      ) as HTMLTextAreaElement
    ).value.trim();
    if (
      nameValue.length > 0 &&
      emailValue.length > 0 &&
      messageValue.length > 0
    ) {
      setIsShowLoader(true);
      emailjs
        .sendForm(
          emailsServiceData.serviceID,
          emailsServiceData.templateID,
          formRef.current!,
          emailsServiceData.publicKey
        )
        .then(
          () => {
            setIsShowLoader(false);
            setAlertText(alertMessagesData.success);
          },
          (error: any) => {
            setIsShowLoader(false);
            setAlertText(`${alertMessagesData.error}${error.text}`);
          }
        );
      e.currentTarget.reset();
    } else {
      if (nameValue.length <= 0) {
        setAlertText(alertMessagesData.missingName);
      } else if (emailValue.length <= 0) {
        setAlertText(alertMessagesData.missingEmail);
      } else if (messageValue.length <= 0) {
        setAlertText(alertMessagesData.missingMessage);
      }
    }
  };
  return (
    <div className="formChapter">
      {alertText && <AlertMessage text={alertText} />}
      {isShowLoader && <Loader color={mainColor} />}
      <form ref={formRef} className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name={contactFormData.name.label}
          placeholder={contactFormData.name.placeholder}
          aria-label={contactFormData.name.label}
        />
        <input
          type="email"
          name={contactFormData.email.label}
          placeholder={contactFormData.email.placeholder}
          aria-label={contactFormData.email.label}
        />
        <textarea
          name={contactFormData.message.label}
          placeholder={contactFormData.message.placeholder}
          aria-label={contactFormData.message.label}
          rows={10}
        ></textarea>
        <button
          className="sendButton"
          style={{
            border: `1px solid ${mainColor}`,
          }}
          aria-label="send message"
        >
          {contactFormData.buttonName}
        </button>
      </form>
    </div>
  );
}

export default ContactFormComponent;
