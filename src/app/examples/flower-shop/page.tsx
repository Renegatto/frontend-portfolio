import styles from './page.module.scss';

export function FlowerShopFrontPage() {
  return (
    <div className={styles['page']}>
      <header className={styles['header']}>
        Flower shop header
      </header>
      <main className={styles['main']}>
       Flower shop main
      </main>
      <footer className={styles['footer']}>
      Flower shop footer
      </footer>
    </div>
  );
}
