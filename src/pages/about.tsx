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
        <div className={styles.aboutContent}>
          <p>
            I'm Narakorn Suwunpatung, <br />
            a Senior Full Stack Developer <br />
            with over nine years of experience.
          </p>
          <p>
            I specialize in creating marketing technology solutions <br />
            and managing complex projects for high-profile clients.
          </p>
        </div>
      </main>
    </div>
  );
}
