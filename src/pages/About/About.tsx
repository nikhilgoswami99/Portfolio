import { Code, Server, Smartphone, LayoutPanelTop } from "lucide-react";
import styles from "./About.module.css";

const About = () => {
  const services = [
    {
      icon: <LayoutPanelTop size={40} />,
      title: "UI Development",
      description:
        "Building clean, responsive, and pixel-perfect user interfaces using modern frontend technologies.",
    },
    {
      icon: <Code size={40} />,
      title: "React Development",
      description:
        "Developing scalable and maintainable React applications with reusable components and clean architecture.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Responsive Design",
      description:
        "Creating fully responsive layouts that work smoothly across mobile, tablet, and desktop devices.",
    },
    {
      icon: <Server size={40} />,
      title: "Performance Optimization",
      description:
        "Optimizing frontend applications for speed, accessibility, and better user experience.",
    },
  ];

  return (
    <article className={styles.about}>
      <header>
        <h2 className={styles.title}>About Me</h2>
      </header>

      <section className={styles.aboutText}>
        <p>
          I’m a Software Engineer specializing in building modern, scalable web
          interfaces using React and JavaScript. I enjoy solving complex
          problems and turning ideas into clean, efficient, and user-friendly
          digital experiences.
        </p>
        <p>
        I focus on crafting responsive, high-performance interfaces with strong attention to usability and design. From translating product requirements into reusable UI components to integrating APIs and managing frontend state, I aim to build seamless experiences that deliver real value to users.
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
