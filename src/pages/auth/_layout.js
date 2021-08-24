import { Redirect } from 'umi';
import styles from './_layout.css';
import { getCookies } from '../../utils/handlingCookies';

function AuthLayout(props) {

  if(getCookies("isLogged")){
    return <Redirect to="/user" />;
  }

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