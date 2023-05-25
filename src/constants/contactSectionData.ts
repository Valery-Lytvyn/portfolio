export const emailsServiceData = {
  serviceID: "service_c4nsjbk",
  templateID: "template_cjroexq",
  publicKey: "vhZJkv-_dXV-apvNU",
};

export interface ContactData {
  title: string;
  subtitle: string;
}

export const ContactTextData: ContactData = {
  title: "Contact me",
  subtitle: `Do you have interesting projects? I am ready to implement them. Please contact me to discuss the details.`,
};

export const alertMessagesData = {
  success: "Your message has been sent.",
  error: "Something went wrong.",
  missingName: "Please enter your name",
  missingEmail: "Please enter your email",
  missingMessage: "You have not entered a message text",
};

interface FormElement {
  placeholder: string;
  label: string;
}
interface ContactForm {
  name: FormElement;
  email: FormElement;
  message: FormElement;
  buttonName: string;
}

export const contactFormData: ContactForm = {
  name: { placeholder: "your name", label: "name" },
  email: { placeholder: "email", label: "name" },
  message: { placeholder: "write your message", label: "name" },
  buttonName: "SEND",
};
