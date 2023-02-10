import Button from './button/Button.jsx';
import { Section } from 'components/Feedback/Vote/Vote.styled';
import { CgSmileMouthOpen, CgSmileNeutral, CgSmileSad } from 'react-icons/cg';

const Vote = ({ leaveVote }) => {
  return (
    <Section>
      <Button onClick={() => leaveVote('good')} type="Button">
        Good <CgSmileMouthOpen />
      </Button>
      <Button onClick={() => leaveVote('neutral')} type="Button">
        Neutral <CgSmileNeutral />
      </Button>
      <Button onClick={() => leaveVote('bad')} type="Button">
        Bad <CgSmileSad />
      </Button>
    </Section>
  );
};

export default Vote;
