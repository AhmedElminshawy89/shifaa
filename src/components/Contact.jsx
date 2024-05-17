import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_6iqijfa";
    const templateId = "template_hmyqgde";
    const publicKey = "PDq7RqygiGbmBaaOg";
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        name: name,
        to_name: "Shifaa Medical",
        email: email,
        phone: phone,
        address: address,
        message: message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      toast("تم ارسال البيانات بنجاح وسيتم الرد في اسرع وقت", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إرسال الرسالة");
    }
  };

  return (
    <section className="order reveal" id="للتواصل_معنا_والحجز">
      <div className="header-sec mb-[50px]">
        <h1 className="main_title_Articles-one">للتواصل معنا</h1>
        <h1 className="main_title_Articles-two z-10">كل ما تتمناه لدينا</h1>
      </div>
      <form name="myForm" onSubmit={handleSubmit}>
        <div className="bg bg-[rgba(255,255,255,.04)] shadow-md">
          <div className="form">
            <div className="input">
              <label htmlFor="name">الاسم</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="الاسم"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="email">البريد الالكتروني</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="البريد الالكتروني"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="phone">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="رقم الهاتف"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="address">عنوانك</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="عنوانك"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                required
              />
            </div>
            <div className="input">
              <label htmlFor="message">طلبك</label>
              <textarea
                name="message"
                id="message"
                placeholder="طلبك"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
            </div>
          </div>
          <div className="btn">
            <button type="submit">ارسال</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;
