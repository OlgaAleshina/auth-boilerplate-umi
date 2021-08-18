import styles from './_layout.css';

function AuthLayout(props) {
  return (
    <div className={styles.wrapper}>
        <div className={styles.wallpaper}></div>
        <div className={styles.formWrapper}>
          <h1 className={styles.title}>Auth Layout</h1>
          {props.children}
        </div>
    </div>
  );
}

export default AuthLayout;