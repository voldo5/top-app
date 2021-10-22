import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames/bind";

export const Paragraph = ({
  fontSize = "m",
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: fontSize == "s",
        [styles.m]: fontSize == "m",
        [styles.l]: fontSize == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
