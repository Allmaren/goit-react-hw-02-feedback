import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ onClick, type, children }) => {
  return (
    <button onClick={onClick} className={styles.btnVote} type={type}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
