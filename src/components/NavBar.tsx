import Link from "next/link";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
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
    </nav>
  );
}
