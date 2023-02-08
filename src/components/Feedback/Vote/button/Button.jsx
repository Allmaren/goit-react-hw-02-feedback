import styles from './Button.module.scss';

const Button = ({ onClick, type, children }) => {
  return (
    <button onClick={onClick} className={styles.btnVote} type={type}>
      {children}
    </button>
  );
};

export default Button;
