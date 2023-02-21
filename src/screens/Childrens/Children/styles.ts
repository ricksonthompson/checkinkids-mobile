import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #f6f8f9;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: #4b5c6b;
  margin-bottom: 5px;
  margin-top: 10px;
  font-family: 'DINNextW1G-Bold';
`;

export const Children = styled.View`
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  margin-bottom: 10px;
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 12px;
`;

export const ListChildrens = styled.ScrollView`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #4b5c6b;
  margin-bottom: 5px;
  margin-top: 5px;
  font-family: 'DINNextW1G-Bold';
`;

export const InfoChildren = styled.View`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

export const ProfileAndInfo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: '#F9E435';
  border-radius: 12px;
`;

export const IconNative = styled.Image`
  width: 35px;
  height: 35px;
`;
