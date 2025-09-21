import '../Styles/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    const formData = new FormData(form.current);
    const fullName = `${formData.get("user_name")} ${formData.get("user_surname")}`;
    const title = formData.get("subject");

    const emailParams = {
      user_name: `<strong>${fullName}</strong>`,  // Ad + Soyad kalın
      email: formData.get("user_email"),
      title: title,                               // Başlık
      subject: `${title} - ${fullName}`,         // Mail konusu
      message: formData.get("message"),
      time: new Date().toLocaleString()          // Gönderim zamanı
    };

    emailjs.send(
      "service_e1w02d5",        // Service ID
      "template_j7s8mzl",       // Template ID
      emailParams,
      "HGRCcQi0wkCtXdwXm"       // Public Key
    ).then(
      () => {
        alert("Mesaj başarıyla gönderildi ✅");
        form.current?.reset();
      },
      (error) => {
        alert("Hata oluştu: " + error.text);
      }
    ).finally(() => setLoading(false));
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-container">
        <h2 className='contact-header montserrat-bold'>Contact Me</h2>
        <div className="contact-main">
          <div className="contact-info">
            <div className='Emaildiv'>
              <MdOutlineEmail className='email-icon' />
              <p className='email-text montserrat-regular'>09erenkeles09@gmail.com</p>
            </div>
            <div className='Adressdiv'>
              <FaLocationDot className='location-icon' />
              <p className='address-text montserrat-regular'>Aydın, Türkiye</p>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="input-names">
              <input placeholder="Name" type="text" className="name montserrat-regular" name="user_name" required />
              <input placeholder="Surname" type="text" className="surname montserrat-regular" name="user_surname" required />
            </div>
            <input placeholder="Email" type="email" className="email montserrat-regular" name="user_email" required />
            <input placeholder="Subject" name="subject" className="subject montserrat-regular" required />
            <textarea placeholder="Message" className="message montserrat-regular" name="message" required />

            <button type="submit" className="submit montserrat-regular" disabled={loading}>
              {loading ? "Gönderiliyor..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
