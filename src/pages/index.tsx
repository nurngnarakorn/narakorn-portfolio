import "swiper/css";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Professional Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Hello, I am Narakorn Suwunpatung, a Full Stack Developer.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Learn more about my background and expertise.</p>
          </a>

          <a href="/portfolio" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Explore my projects and professional experience.</p>
          </a>

          <a href="/skills" className={styles.card}>
            <h3>Skills &rarr;</h3>
            <p>Discover the technologies and tools I utilize.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Reach out to me for any inquiries or collaborations.</p>
          </a>

          <a href="/marketer" className={styles.card}>
            <h3>Marketing Portfolio &rarr;</h3>
            <p>Learn how to generate income.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
