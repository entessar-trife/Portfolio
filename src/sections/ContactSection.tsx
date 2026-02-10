import ContactComponent from "../components/ContactComponent";
import MainTitle from "../components/MainTitle";
import { contactData } from "../data/contactData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 text-center ">
      <MainTitle title="Let's Connect" />
      <div
        className="grid grid-cols-1 items-center lg:grid-cols-3 
      bg-white p-6 shadow-md rounded-xl border-2 border-purple-200"
      >
        {contactData.map((e, index) => (
          <ContactComponent key={index} {...e} />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
