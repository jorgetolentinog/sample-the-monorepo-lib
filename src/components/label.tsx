import styles from "./label.module.css";

interface ButtonProps {
  text?: string;
}

export function TheMonorepoLabel(props: ButtonProps) {
  return (
    <label className={styles.label}>{props.text ? props.text : "Sample"}</label>
  );
}
