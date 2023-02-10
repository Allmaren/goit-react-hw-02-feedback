import PropTypes from 'prop-types';
import { Title } from './Card.js';

const VoteBlock = ({ children, title }) => {
  return (
    <>
      <Title>{title}</Title>
      {children}
    </>
  );
};

export default VoteBlock;

VoteBlock.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
