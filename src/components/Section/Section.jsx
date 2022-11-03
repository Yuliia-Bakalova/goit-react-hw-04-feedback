import PropTypes from 'prop-types';
import { Container, Title } from './Section.styled.jsx';

export const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <>{children}</>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
