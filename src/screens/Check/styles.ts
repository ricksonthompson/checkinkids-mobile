import styled from 'styled-components/native';

type PropsText =  {
  fontStyle: string;
};

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #F7F9FA;
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

export const Text = styled.Text<PropsText>`
  font-size: 16px;
  color: #4b5c6b;
  font-family: ${p => (p.fontStyle === 'Bold' ? 'DINNextW1G-Bold' : 'DINNextW1G-Regular')};
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
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: '#63C280';
    border-radius: 12px;
`;

export const Responsibles = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 10px;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  border-radius: 12px;
`;

export const Footer = styled.View`
  display: flex;
  padding: 10px;
  background-color: #FFFFFF;
  align-items: flex-end;
  width: 100%;
  justify-content: center;
  height: 100px;
`;