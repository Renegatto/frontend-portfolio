import styles from "./page.module.css";
import { SelectManyExample } from "./components/select-many";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SelectManyExample/>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
