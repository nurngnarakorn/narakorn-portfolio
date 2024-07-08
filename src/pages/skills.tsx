import Head from "next/head";
import styles from "../styles/Page.module.css";

export default function Skills() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Skills</h1>
        <p className={styles.description}>
          Discover the technologies and tools I use.
        </p>
        <ul className={styles.list}>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>Nuxt.js</li>
          <li>PHP</li>
          <li>Python</li>
          {/* Add more skills here */}
        </ul>
      </main>
    </div>
  );
}
