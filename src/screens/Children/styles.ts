import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: #f6da2e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const TextInput = styled.TextInput`
  background-color: #05060f0a;
  border-radius: 5px;
  border: 2px solid transparent;
  font-size: 16px;
  max-width: 190px;
  height: 44px;
  width: 50%;

  outline: none;
  border-color: #05060f;
`;
