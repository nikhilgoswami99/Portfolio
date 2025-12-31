import { useState } from "react";
import { Mail, MapPin, ChevronDown } from "lucide-react";
import styles from "./Sidebar.module.css";
import profileImg from '../../assets/profile_Img.png'

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
          <ChevronDown
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
              <Mail size={18} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Email</p>
              <a
                href="nikhil.goswami.18121999@gmail.com"
                className={styles.contactLink}
              >
                nikhil.goswami.18121999@gmail.com
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <MapPin size={18} />
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
