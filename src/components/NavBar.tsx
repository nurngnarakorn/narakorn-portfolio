import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <Link href="/" className={styles.navLink}>
            Narakorn 's Portfolio
          </Link>
        </div>
        <div
          className={`${styles.links} ${
            isMobileMenuOpen ? styles.showMenu : ""
          }`}
        >
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/portfolio" className={styles.navLink}>
            Portfolio
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
          <Link href="/marketer" className={styles.navLink}>
            Marketer
          </Link>
        </div>
        <button className={styles.menuButton} onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}
