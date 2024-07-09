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
            <div className={styles.projectDetails}>
              <h3>2024 : Developed Product Review System</h3>
              <p>
                I have developed a comprehensive product review system that
                enables members to write detailed reviews for various products.
                The system includes the following features:
              </p>
              <ul>
                <li>
                  <strong>Rating System:</strong> Users can provide ratings for
                  products on a predefined scale, helping to quantify their
                  experience and satisfaction.
                </li>
                <li>
                  <strong>Image Upload:</strong> Users have the ability to
                  upload images along with their reviews, providing visual
                  context and enhancing the credibility of their feedback.
                </li>
                <li>
                  <strong>Detailed Reviews:</strong> Members can write extensive
                  reviews, sharing their personal experiences, opinions, and any
                  relevant information about the products.
                </li>
              </ul>
              <p>
                This system not only facilitates user engagement but also aids
                potential buyers in making informed decisions based on authentic
                user feedback.
              </p>
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
          {/* <div id="product-review" className={styles.projectItem}>
            <img
              src="/images/cpbrandsite_product_review.png"
              alt="cpbrandsite product review"
              className={styles.image}
            />
            <div className={styles.projectDetails}>
              <h3>cpbrandsite : Product Review</h3>
              <p>Project: Product Review</p>
              <a
                href="https://member.cpbrandsite.com/product"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Project
              </a>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
}
