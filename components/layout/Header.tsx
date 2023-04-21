import styles from "./Header.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export const headerItems = [
  {
    title: "コンセプト",
    link: "/how-to-use",
  },
  {
    title: "お問い合わせ",
    link: "/btm-map",
  },
];

export const getHeaderItems = headerItems.map((item, index) => {
  return (
    <Link key={index} href={item.link}>
      <li className={styles["title"]}>{item.title}</li>
    </Link>
  );
});

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  /**
   * ヘッダーメニューの取得
   * headerItemsをmap処理で展開し、ヘッダーメニューのHTMLを返す
   */

  const variants: { open: {}; closed: {} } = {
    open: {
      display: "block",
      opacity: [0, 0, 1],
      x: [1280, 300, 0],
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: [1, 0, 0],
      x: [0, 300, 1280],
    },
  };
  const Path = (variants: any) => {
    return (
      <>
        {JSON.stringify(variants)}
        <motion.path
          strokeWidth="2"
          stroke="hsl(5, 0%, 60%)"
          strokeLinecap="round"
          {...variants}
        />
      </>
    );
  };
  const getHamburgerMenu = () => {
    return (
      <motion.div
        className={styles["menu-icon"]}
        onClick={() => setOpen(!isOpen)}
        animate={isOpen ? "open" : "closed"}
      >
        <svg width="40" height="40" viewBox="0 0 40 40">
          <Path
            variants={{
              open: { d: "M 8 32 L 32 8" },
              closed: { d: "M 8 15 L 32 15" },
            }}
            transition={{ duration: 0.5 }}
            fill="transparent"
            stroke="white"
            strokeWidth="2"
          />
          <Path
            variants={{
              open: { d: "M 8 8 L 32 32" },
              closed: { d: "M 8 25 L 32 25" },
            }}
            transition={{ duration: 0.5 }}
            fill="transparent"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <header className={styles["header"]}>
      <div className={styles["left"]}>
        <Link href="/">
          <img
            src="/images/layout/logo_gaia.svg"
            className={styles["logo"]}
            alt="トップページに戻る"
          />
        </Link>
      </div>
      <div className={styles["right"]}>
        <ul>{getHeaderItems}</ul>
       
        {getHamburgerMenu()}
        <motion.div
          className={styles["menu-modal"]}
          onClick={() => {
            setOpen(!isOpen);
          }}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          initial={false}
        >
        </motion.div>
      </div>
    </header>
  );
};
export default Header;
