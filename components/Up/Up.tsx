import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useScrollY } from "../../hooks/useScrollY";
import styles from "./Up.module.css";
import { ButtonIcon } from "../ButtonIcon/ButtonIcon";

export const Up = (): JSX.Element => {
  const controls = useAnimation(); //retuns control which start animation
  const y = useScrollY();

  //set opacity of control (button) as result of scrolling
  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className={styles.up}
      onClick={scrollToTop}
      animate={controls} // set the button as control to start animation
      initial={{ opacity: 0 }} // set start opacity of button
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
};
