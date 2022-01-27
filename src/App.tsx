import styles from "./App.module.css";
import Cookie from "./Cookie";

function App() {
  return (
    <>
      <div className={styles.cookieContainer}>
        <Cookie />
      </div>
    </>
  );
}

export default App;
