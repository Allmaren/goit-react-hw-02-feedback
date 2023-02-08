import styles from 'components/Feedback/Block/Card.module.scss';

const VoteBlock = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
};

export default VoteBlock;
