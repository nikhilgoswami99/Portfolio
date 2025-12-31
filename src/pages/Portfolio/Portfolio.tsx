import { useState } from 'react';
import { Eye } from 'lucide-react';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Finance',
      category: 'web development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Orizon',
      category: 'web development',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Fundo',
      category: 'web design',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Brawlhalla',
      category: 'applications',
      image: 'https://images.pexels.com/photos/1279813/pexels-photo-1279813.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'DSM.',
      category: 'web design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'MetaSpark',
      category: 'web design',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Summary',
      category: 'web development',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Task Manager',
      category: 'applications',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Arrival',
      category: 'web development',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const categories = ['all', 'web design', 'applications', 'web development'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <article className={styles.portfolio}>
      <header>
        <h2 className={styles.title}>Projects</h2>
      </header>

      <section className={styles.projects}>
        <ul className={styles.filterList}>
          {categories.map((category) => (
            <li key={category} className={styles.filterItem}>
              <button
                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className={styles.projectList}>
          {filteredProjects.map((project, index) => (
            <li key={index} className={styles.projectItem}>
              <a href="#" className={styles.projectLink}>
                <figure className={styles.projectImg}>
                  <div className={styles.projectItemIconBox}>
                    <Eye size={24} />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectCategory}>{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
