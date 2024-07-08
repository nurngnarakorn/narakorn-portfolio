import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
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

        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={styles.slideContent}>
              <img
                src="/images/cpbrandsite_product_list.png"
                alt=""
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slideContent}>
              <img
                src="/images/cpbrandsite_product_review.png"
                alt=""
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
          </SwiperSlide>
        </Swiper>
      </main>
    </div>
  );
}
