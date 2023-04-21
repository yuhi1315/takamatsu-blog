import React from "react";
import styles from "./HomeMainVisual.module.scss";

const HomeMainVisual = () => {
  return (
    <section id="main-visual" className={styles["main-visual"]}>
      <div className={styles["inner"]}>
         <h1>直すのではなく<br/>治る体に変えていく。<br/>松の実は、痛くない整体を<br/>お届けします。</h1>
      </div>
    </section>
  );
};

export default HomeMainVisual;
