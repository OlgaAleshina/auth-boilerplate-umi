import styles from './styles.css';


function BasicLayout(props) {


  if (props.location.pathname === '/auth/login' || props.location.pathname === '/auth/signup') {
    return  props.children 
  }


  return (
      <div className={styles.normal}>
          <h1 className={styles.title}>Yay! I am basic layuot</h1>
          {props.children}
      </div>
  );
  
}

export default BasicLayout
