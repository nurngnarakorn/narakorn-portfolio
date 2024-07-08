import Head from "next/head";
import styles from "../styles/Page.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.description}>
          Here are some of my projects and work experience.
        </p>

        <div className={styles.projectList}>
          <div id="project-list" className={styles.projectItem}>
            <img
              src="/images/cpbrandsite_product_list.png"
              alt="cpbrandsite product list"
              className={styles.image}
            />
            <h3>cpbrandsite : product list</h3>
            <p>Project : Product List</p>
            <a
              href="https://member.cpbrandsite.com/product"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Project
            </a>
          </div>
          <div id="product-review" className={styles.projectItem}>
            <img
              src="/images/cpbrandsite_product_review.png"
              alt="cpbrandsite product review"
              className={styles.image}
            />
            <h3>cpbrandsite : product review</h3>
            <p>Project : Product Review</p>
            <a
              href="https://member.cpbrandsite.com/product"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              View Project
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
