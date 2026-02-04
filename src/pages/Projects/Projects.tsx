
import { Eye } from 'lucide-react';
import styles from './Projects.module.css';
import jobPortalImg from '../../assets/job_portal.png';
import fitnessTrackerImg from '../../assets/fitness_tracker.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Job Portal',
      image: jobPortalImg
    },
    {
      title: 'Fitness Tracker',
      image: fitnessTrackerImg
    }
  ];

  return (
    <article className={styles.portfolio}>
      <header>
        <h2 className={styles.title}>Projects</h2>
      </header>

      <section className={styles.projects}>
        <ul className={styles.projectList}>
          {projects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href="#" className={styles.projectLink}>
                <figure className={styles.projectImg}>
                  <div className={styles.projectItemIconBox}>
                    <Eye size={24} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className={styles.projectTitle}>{project.title}</h3>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
