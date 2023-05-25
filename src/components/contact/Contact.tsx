import MotionComponent from "../motionComponent/MotionComponent";
import { verticalVariant } from "../../constants/motionComponentData";
import TitleComponent from "../titleComponent/TitleComponent";
import ContactFormComponent from "../contactFormComponent/ContactFormComponent";
import { ContactTextData } from "../../constants/contactSectionData";
import contactImage from "../../assets/images/ukr_made.webp";
import "./contact.scss";

function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <TitleComponent
          title={ContactTextData.title}
          subTitle={ContactTextData.subtitle}
        />
        <div className="contactContent">
          <MotionComponent
            content={<ContactFormComponent />}
            variant={verticalVariant}
          />
          <div className="imageChapter">
            <div className="logoUkraine">
              <img src={contactImage} alt="logo Ukraine" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
