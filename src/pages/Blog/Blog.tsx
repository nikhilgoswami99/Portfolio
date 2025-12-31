import { Calendar } from 'lucide-react';
import styles from './Blog.module.css';

const Blog = () => {
  const posts = [
    {
      title: 'Design Conferences in 2022',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'
    },
    {
      title: 'Best Fonts Every Designer',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'
    },
    {
      title: 'Design Digest #80',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'
    },
    {
      title: 'UI Interactions of the Week',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'
    },
    {
      title: 'The Forgotten Art of Spacing',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      title: 'Design Digest #79',
      category: 'Design',
      date: 'Feb 23, 2022',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'
    }
  ];

  return (
    <article className={styles.blog}>
      <header>
        <h2 className={styles.title}>Blog</h2>
      </header>

      <section className={styles.blogPosts}>
        <ul className={styles.blogPostsList}>
          {posts.map((post, index) => (
            <li key={index} className={styles.blogPostItem}>
              <a href="#" className={styles.blogPostLink}>
                <figure className={styles.blogBanner}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </figure>

                <div className={styles.blogContent}>
                  <div className={styles.blogMeta}>
                    <p className={styles.blogCategory}>{post.category}</p>
                    <span className={styles.dot}></span>
                    <time dateTime={post.date} className={styles.blogDate}>
                      <Calendar size={14} />
                      {post.date}
                    </time>
                  </div>

                  <h3 className={styles.blogItemTitle}>{post.title}</h3>
                  <p className={styles.blogText}>{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Blog;
