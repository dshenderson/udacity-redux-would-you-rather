import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem;
  border: 1px solid #333;
  border-radius: 0.5rem;
  background-color: gold;
  box-shadow: 0 0 1px rgba(192, 192, 192, 0);
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: box-shadow, transform;
  color: #333;
  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 10px 10px -10px rgba(192, 192, 192, 192.5);
    transform: scale(1.1);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    transform: none;
  }
`;

export const Label = styled.label`
  display: block;
  width: 32rem;
  max-width: 100%;
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-style: italic;
  &:after {
    content: ':';
  }
`;

export const Dropdown = styled.select`
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid silver;
  border-radius: 0.5rem;
  font-size: 1rem
`;

export const TextField = styled.input`
  display: block;
  width: 32rem;
  max-width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid silver;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const RadioButton = styled.input`
  position: relative;
  top: -1px;
  margin-right: 0.5rem;
`;

export const RadioButtonLabel = styled(Label)`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  &:after {
    content: '?';
  }
  &.selected {
    border-color: deepskyblue;
  }
`;
