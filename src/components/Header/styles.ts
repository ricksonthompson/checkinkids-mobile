import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  background-color: #F9E435;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;

export const Icon = styled.Image`
  max-width: 75px;
  max-height: 100px;
  width: auto;
  height: auto;
`;

export const StatusCult = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
