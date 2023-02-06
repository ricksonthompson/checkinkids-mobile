import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #ffffff;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #4b5c6b;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'DINNextW1G-Bold';
`;

export const Children = styled.View`
  display: flex;
  padding: 10px;
  background-color: #F6F8F9;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: column;
  width: 100%;
`;

export const ListChildrens = styled.ScrollView`
  display: flex;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #4b5c6b;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'DINNextW1G-Bold';
`;
