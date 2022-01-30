import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import styles from "./App.module.css";
import Cookie from "./Cookie";

function App() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const q = gsap.utils.selector(mainContainerRef);
  const timeline = useRef<GSAPTimeline>();
  console.log("timeline.current ", timeline.current);
  const [animationDone, setAnimationDone] = useState<boolean>(false);

  useEffect(function animatePopup() {
    setAnimationDone(true);
    timeline.current = gsap
      .timeline({ defaults: { duration: 0.75, ease: "power1.out" } })
      .fromTo(
        q(`.${styles.cookieContainer}`),
        { scale: 0 },
        { scale: 1, ease: "elastic.out(0.7, 0.4)", duration: 1 }
      )
      .fromTo(
        q("#cookie"),
        { opacity: 0, x: -50, rotation: "-45deg" },
        { opacity: 1, x: 0, rotation: "0deg" },
        "<70%"
      )
      .fromTo(
        q(`.${styles.text}`),
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        "<"
      );
  }, []);

  return (
    <div className={styles.mainContainer} ref={mainContainerRef}>
      <div
        className={`${styles.cookieContainer} ${
          animationDone ? "" : styles.hidden
        }`}
      >
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
