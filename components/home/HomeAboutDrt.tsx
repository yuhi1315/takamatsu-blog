import styles from "./HomeAboutShop.module.scss";

const HomeAboutDrt = () => {
  return (
    <section id="service" className={styles["service"]}>
      <div className={styles["inner"]}>
        <div className={styles["detail"]}>
          <h3>
            DRT整体とは
          </h3>
          <p className={styles["explanation"]}>
          DRTとは、「ダブルハンド・リコイル・テクニック」の略で、背骨をユラユラ揺らしながらゆがみを修正していく技術です。
自然治癒力を高めていく根本療法のため、全身のあらゆる症状の改善に効果を発揮します。
         </p>      
        </div>
        <img src="/images/index/drt.png" alt="" />
      </div>
    </section>
  );
};
export default HomeAboutDrt;