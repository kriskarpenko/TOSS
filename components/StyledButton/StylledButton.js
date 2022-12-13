import { FaCoffee } from 'react-icons/fa';
import styled from 'styled-components';

const StylledButton = ({ icon, children, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Icon name={icon} />
      <Text>{children}</Text>
    </Button>
  );
};

export default StylledButton;

const Icon = styled(FaCoffee)`
  background-color: #f0f;
`;

const Text = styled.span`
  text-transform: uppercase;
  @media (max-width: 720px) {
    display: none;
  }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
