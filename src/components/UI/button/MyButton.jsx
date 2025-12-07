import styles from "./MyButton.module.css";

export const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={styles.myButton}>
      {children}
    </button>
  );
};
