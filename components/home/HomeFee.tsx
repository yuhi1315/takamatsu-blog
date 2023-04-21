import React from "react";
import styles from "./HomeFee.module.scss";

const HomeFee = () => {
  return (
    <section id="main-visual" className={styles["fee"]}>
      <div className={styles["inner"]}>
        <h1>料金のご案内</h1>
        <table>
        <tbody>
            <tr>
            <td>初回</td>
            <td>2500円</td>
            </tr>
            <tr>
            <td>2回目以降</td>
            <td>3500円</td>
            </tr>
            </tbody>

        </table>      
  </div>
    </section>
  );
};

export default HomeFee;
