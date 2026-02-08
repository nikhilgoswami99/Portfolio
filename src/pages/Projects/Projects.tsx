
import { Eye, Github } from 'lucide-react';
import styles from './Projects.module.css';
import jobPortalImg from '../../assets/job_portal.png';
import fitnessTrackerImg from '../../assets/fitness_tracker.png';

const Portfolio = () => {
  const projects = [
    {
      title: 'Job Portal',
      image: jobPortalImg,
      description: 'A comprehensive job portal platform connecting employers with job seekers.',
      features: ['Job Listings', 'Application Tracking', 'User Profiles', 'Search & Filters'],
      githubLink: 'https://github.com/yourusername/job-portal',
      hostedLink: 'https://job-portal-demo.com'
    },
    {
      title: 'Fitness Tracker',
      image: fitnessTrackerImg,
      description: 'Track your fitness journey with workout plans, progress monitoring, and health insights.',
      features: ['Workout Plans', 'Progress Tracking', 'Calorie Counter', 'Exercise Library'],
      githubLink: 'https://github.com/yourusername/fitness-tracker',
      hostedLink: 'https://fitness-tracker-demo.com'
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
              <div className={styles.projectCard}>
                <figure className={styles.projectImg}>
                  <div className={styles.projectItemIconBox}>
                    <Eye size={24} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectFeatures}>
                    <h4 className={styles.featuresTitle}>Key Features:</h4>
                    <ul className={styles.featuresList}>
                      {project.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.projectLinks}>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.projectBtn}
                      aria-label="View GitHub Repository"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href={project.hostedLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`${styles.projectBtn} ${styles.primaryBtn}`}
                      aria-label="View Live Demo"
                    >
                      <Eye size={18} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
