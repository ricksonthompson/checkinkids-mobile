import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #F6F8F9;
`;

export const Card = styled.View`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const Form = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #4b5c6b;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: 'DINNextW1G-Bold';
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
  border-color: #4b5c6b;
  color: #2e2d2d;
`;

export const CheckinButton = styled.TouchableOpacity`
  background-color: transparent;
  text-decoration: none;
  border: #19c64d;
  color: #19c64d;
  background-color: transparent;
  text-decoration: none;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CheckinText = styled.Text`
  color: #19c64d;
  font-weight: bold;
`;

export const HistoryButton = styled.TouchableOpacity`
  background-color: transparent;
  text-decoration: none;
  border: #e7833a;
  color: #e7833a;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const HistoryText = styled.Text`
  color: #e7833a;
  font-weight: bold;
`;

export const HeaderCard = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const CardDetails = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const CardActions = styled.View`
  display: flex;
  width: 100%;
  min-height: 10px;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  color: #4b5c6b;
  font-weight: 400;
  font-size: 16px;
  font-family: 'DINNextW1G-Regular';
`;

export const DateCult = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const QuantityChildrens = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ShiftCult = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
