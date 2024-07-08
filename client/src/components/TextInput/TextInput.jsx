import styles from "./TextInput.module.css";
const TextInput = (props) => {
  return (
    <div>
      <input type="text" {...props} className={styles.input} />
      <div></div>
    </div>
  );
};

export default TextInput;
