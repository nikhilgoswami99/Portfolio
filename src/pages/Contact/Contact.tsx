import { useState } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <article className={styles.contact}>
      <header>
        <h2 className={styles.title}>Contact</h2>
      </header>

      <section className={styles.contactForm}>
        <h3 className={styles.formTitle}>Contact Form</h3>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <input
              type="text"
              name="fullname"
              className={styles.formInput}
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            className={styles.formInput}
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" className={styles.formBtn}>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
