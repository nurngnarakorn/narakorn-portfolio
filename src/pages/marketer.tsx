import "swiper/css";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Marketing Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Marketing Portfolio</h1>
        {/* 
        <p className={styles.description}>
          Hello, I am Narakorn Suwunpatung, a professional marketer. Discover
          how to earn money by partnering with me.
        </p> */}

        <div className={styles.grid}>
          <a
            href="https://s.shopee.co.th/Vm7Ws944Z"
            target="_blank"
            className={styles.card}
          >
            <h3>Shopee &rarr;</h3>
            <p>
              Explore opportunities to earn income through the Shopee Affiliate
              Program.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
