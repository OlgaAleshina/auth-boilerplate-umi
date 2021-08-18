import styles from './styles.css';
import { formatMessage } from 'umi-plugin-locale';


function User() {
  return (
    <div className={styles.normal}>
     User general page
      <ul className={styles.list}>
       
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
        </li>
      </ul>
      <button>
            
            I am a button
        </button>
    </div>
  );

  
}

//User.wrappers = ['../wrappers/auth']

export default User;