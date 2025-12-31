import { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";
import { LuMapPin, LuMail } from "react-icons/lu";
import styles from "./Sidebar.module.css";
import profileImg from "../../assets/profile_Img.png";

const Sidebar = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInfo}>
          <div className={styles.avatarBox}>
            <img
              src={profileImg}
              alt="Nikhil Goswami"
              className={styles.avatar}
            />
          </div>
          <div className={styles.infoContent}>
            <h1 className={styles.name}>Nikhil Goswami</h1>
            <p className={styles.title}>Software Developer</p>
          </div>
        
        <button
          className={styles.infoMoreBtn}
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>Show Contacts</span>
          <FaChevronDown
            className={showContacts ? styles.iconRotated : ""}
            size={18}
          />
        </button>
      </div>

      <div
        className={`${styles.sidebarInfoMore} ${
          showContacts ? styles.active : ""
        }`}
      >
        <div className={styles.separator}></div>

        <ul className={styles.contactsList}>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <LuMail size={18} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Email</p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nikhil.goswami.18121999@gmail.com"
                target="blank"
                className={styles.contactLink}
              >
                nikhil.goswami.18121999@gmail.com
              </a>
            </div>
          </li>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaGithub size={18} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Github</p>
              <a
                href="https://github.com/nikhilgoswami99"
                target="blank"
                className={styles.contactLink}
              >
                nikhilgoswami99/github
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaLinkedin size={18} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/nikhil-goswami99/"
                target="blank"
                className={styles.contactLink}
              >
                nikhil-goswami99/linkedIn
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <LuMapPin size={18} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Location</p>
              <address className={styles.contactLink}>
                Kanpur, Uttar Pradesh, India
              </address>
            </div>
          </li>
        </ul>

        <div className={styles.separator}></div>
      </div>
    </aside>
  );
};

export default Sidebar;
