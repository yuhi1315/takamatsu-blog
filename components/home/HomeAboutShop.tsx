import styles from "./HomeAboutShop.module.scss";

const HomeAboutShop = () => {
  return (
    <section id="service" className={styles["service"]}>
      <div className={styles["inner"]}>
        <img src="/images/index/about.png" alt="" />
        <div className={styles["detail"]}>
          <h3>
            松の実は<span>市内発</span>の
            <br />
            DRT整体院<span></span>
          </h3>
          <p className={styles["explanation"]}>
          長年に渡り、家族が営む鍼灸院を手伝っていた院長が、本格的に整体の勉強をする中で、痛みの少ない根本療法で自然治癒力も高められるDRT整体と出会いました。
          </p>      
        </div>
      </div>
    </section>
  );
};
export default HomeAboutShop;
