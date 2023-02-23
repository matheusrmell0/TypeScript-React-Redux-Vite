import styles from './Loading.module.css';

const Loading = () => {
  return (
    <section className={styles.loading}>
      <div style={{ border: '180px solid white', borderRadius: '50%' }}></div>
    </section>
  );
};

export default Loading;
