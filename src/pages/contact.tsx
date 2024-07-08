import Head from "next/head";
import styles from "../styles/Page.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.description}>
          Get in touch with me for any inquiries.
        </p>
        <p className={styles.description}>Email: nurng.narakorn@gmail.com</p>
        <p className={styles.description}>Phone: 096-5276939</p>
      </main>
    </div>
  );
}
