import styled from 'styled-components/native';

interface InputProps {
  error: boolean;
}

export const TextInput = styled.TextInput<InputProps>`
  font-family: 'DINNextW1G-Regular';
  font-size: 18px;
  padding: 12px;
  color: ${p => (p.error ? '#c81717' : '#4b5c6b')};
  border-color: ${p => (p.error ? '#c81717' : '#4b5c6b')};
`;
