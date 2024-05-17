import { FaPhoneAlt } from "react-icons/fa";

const ContactPhone = () => {
  return (
    <div className="contactPhone-btn-wrapper">
      <a href="tel:+201284904444"
      target="_blank" rel="noreferrer">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactPhone;
