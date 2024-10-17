import HandIcon from "./HandIcon";
import styles from "./HandButton.module.scss";

function HandButton({ value, onClick }) {
  const handleClick = () => {
    onClick(value);
  };
  return (
    <button className={styles.HandButton} onClick={handleClick}>
      <HandIcon value={value} className={styles.HandButtonIcon} />
    </button>
  );
}

export default HandButton;
