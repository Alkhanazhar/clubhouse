/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types, no-unused-vars
const Button = ({ styles, iconif, title, onClick }) => {
  return (
    // eslint-disable-next-line react/prop-types
    <button
      onClick={onClick}
      className={styles.button}
      style={{ marginTop: "1.4rem" }}
    >
      <span>{title}</span>
      <span>
        <iconif />
      </span>
    </button>
  );
};

export default Button;
