import styles from "./App.module.css";
import Cookie from "./Cookie";

function App() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.cookieContainer}>
        <Cookie />
        <div className={styles.text}>
          <h2 className={styles.cookieTitle}>Cookie Policy</h2>
          <p className={styles.cookieDescription}>
            We use analytial cookies (yum) to make your experience on this
            website better.
          </p>
          <button>Ok, got it!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
