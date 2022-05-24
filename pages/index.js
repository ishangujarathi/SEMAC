import styles from '../styles/home.module.css';
import Content from './Content';

export default function Home() {
  return (
    <div className={styles.container}>
      <Content />
    </div>
  );
}
