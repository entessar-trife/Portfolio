import ContactComponent from "../components/ContactComponent";
import MainTitle from "../components/MainTitle";
import { ContactData } from "../Data/ContactData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 text-center ">
      <MainTitle title="Let's Connect" />
      <div
        className="grid grid-cols-1 items-center lg:grid-cols-3 
      bg-white p-6 shadow-md rounded-xl border-2 border-purple-200"
      >
        {ContactData.map((e, index) => (
          <ContactComponent
            index={index}
            title={e.title}
            icon={e.icon}
            text={e.text}
            social={e.social}
            border={e.border}
          />
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
