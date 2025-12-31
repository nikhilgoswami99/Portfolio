import { BookOpen, Briefcase } from 'lucide-react';
import styles from './Resume.module.css';

const Resume = () => {
  const education = [
    {
      title: 'Pranveer Singh Institute Of Technology',
      period: '2017 - 2021',
      description: 'I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering.'
    },
    {
      title: 'Geekster',
      period: '2024 April - 2025 May',
      description: 'Completed a comprehensive Full-Stack Development bootcamp covering the MERN(MongoDB, Express.js, React.js, Node.js) stack with practical project experience.'
    }
  ];

  const experience = [
    {
      title: 'Innovaneers Technologies',
      period: '2025 Jan - 2025 Dec',
      description: 'I built and maintained small to medium-scale client websites using HTML, CSS, JavaScript, and React.js, focusing on clean architecture and modern UI practices. I developed responsive, mobile-first interfaces and optimized layouts to ensure smooth performance across devices. Based on client requirements, I implemented functional features such as working forms, WhatsApp integration, and basic API connections. Each project was delivered as a production-ready website with maintainable code, basic SEO optimization, and end-to-end deployment.'
    }
  ];

  return (
    <article className={styles.resume}>
      <header>
        <h2 className={styles.title}>Resume</h2>
      </header>

      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <BookOpen size={20} />
          </div>
          <h3 className={styles.timelineTitle}>Education</h3>
        </div>

        <ol className={styles.timelineList}>
          {education.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <h4 className={styles.timelineItemTitle}>{item.title}</h4>
              <span className={styles.timelinePeriod}>{item.period}</span>
              <p className={styles.timelineText}>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.timeline}>
        <div className={styles.titleWrapper}>
          <div className={styles.iconBox}>
            <Briefcase size={20} />
          </div>
          <h3 className={styles.timelineTitle}>Experience</h3>
        </div>

        <ol className={styles.timelineList}>
          {experience.map((item, index) => (
            <li key={index} className={styles.timelineItem}>
              <h4 className={styles.timelineItemTitle}>{item.title}</h4>
              <span className={styles.timelinePeriod}>{item.period}</span>
              <p className={styles.timelineText}>{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      
    </article>
  );
};

export default Resume;
