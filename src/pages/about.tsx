import Head from "next/head";
import styles from "../styles/Page.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Me - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I'm Narakorn Suwunpatung, a Senior Full Stack Developer with over nine
          years of experience.
        </p>
        <p className={styles.description}>
          I specialize in creating marketing technology solutions and managing
          complex projects for high-profile clients.
        </p>
      </main>
    </div>
  );
}
