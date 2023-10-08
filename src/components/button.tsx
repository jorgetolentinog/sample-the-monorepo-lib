import { useState } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  text?: string;
}

export function TheMonorepoButton(props: ButtonProps) {
  const [count, setCount] = useState(0);
  return (
    <button className={styles.button} onClick={() => setCount(count + 1)}>
      {count} {props.text ? props.text : "Clicks"}
    </button>
  );
}
