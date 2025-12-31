import { Code, Server, Smartphone, LayoutPanelTop } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Frontend Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Mobile Applications",
      description:
        "Professional development of applications for iOS and Android.",
    },
    {
      icon: <Server size={40} />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications.",
    },
{
  icon: <LayoutPanelTop size={40} />,
  title: 'UI / UX Design',
  description: 'Designing clean, intuitive, and user-friendly interfaces.'
}

  ];

  return (
    <article className={styles.about}>
      <header>
        <h2 className={styles.title}>About Me</h2>
      </header>

      <section className={styles.aboutText}>
        <p>
          I'm a Software Engineer specializing in building modern, scalable web
  applications using React, JavaScript, and backend technologies. I enjoy
  solving complex problems and turning ideas into clean, efficient, and
  user-friendly digital solutions.
        </p>
        <p>
   I build responsive, user-friendly interfaces with attention to performance
  and usability. From translating requirements into reusable UI components to
  integrating backend services, I aim to create seamless digital experiences
  that add real value to users.
        </p>
      </section>

      <section className={styles.service}>
        <h3 className={styles.serviceTitle}>What I'm Doing</h3>

        <ul className={styles.serviceList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <div className={styles.serviceIconBox}>{service.icon}</div>
              <div className={styles.serviceContentBox}>
                <h4 className={styles.serviceItemTitle}>{service.title}</h4>
                <p className={styles.serviceItemText}>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
