import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import About from './pages/About/About';
import Resume from './pages/Resume/Resume';
import Portfolio from './pages/Portfolio/Portfolio';
// import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import styles from './App.module.css';

function App() {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <div className={styles.app}>
      <Sidebar />

      <main className={styles.mainContent}>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li>
              <button
                className={`${styles.navLink} ${activeNav === 'home' ? styles.active : ''}`}
                onClick={() => setActiveNav('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`${styles.navLink} ${activeNav === 'resume' ? styles.active : ''}`}
                onClick={() => setActiveNav('resume')}
              >
                Resume
              </button>
            </li>
            <li>
              <button
                className={`${styles.navLink} ${activeNav === 'projects' ? styles.active : ''}`}
                onClick={() => setActiveNav('projects')}
              >
                Projects
              </button>
            </li>
            {/* <li>
              <button
                className={`${styles.navLink} ${activeNav === 'blog' ? styles.active : ''}`}
                onClick={() => setActiveNav('blog')}
              >
                Blog
              </button>
            </li> */}
            <li>
              <button
                className={`${styles.navLink} ${activeNav === 'contact' ? styles.active : ''}`}
                onClick={() => setActiveNav('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.contentArea}>
          {activeNav === 'home' && <About />}
          {activeNav === 'resume' && <Resume />}
          {activeNav === 'projects' && <Portfolio />}
          {/* {activeNav === 'blog' && <Blog />} */}
          {activeNav === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}

export default App;
