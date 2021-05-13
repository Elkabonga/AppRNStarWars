import styled from "styled-components/native";

export const View = styled.View`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border: 5px solid #312e38;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border: 5px solid red;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;
