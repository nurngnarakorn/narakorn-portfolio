import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <p className={styles.description}>
          Hi, I'm Narakorn Suwunpatung, a Full Stack Developer.
        </p>

        <div className={styles.grid}>
          <a href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Learn more about my background and skills.</p>
          </a>

          <a href="/portfolio" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Check out some of my projects and work experience.</p>
          </a>

          <a href="/skills" className={styles.card}>
            <h3>Skills &rarr;</h3>
            <p>Discover the technologies and tools I use.</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Get in touch with me for any inquiries.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
