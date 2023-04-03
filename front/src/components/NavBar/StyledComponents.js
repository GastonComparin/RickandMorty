import styled from "styled-components";
/* Barra de navegacion */

export const Container = styled.div`
  padding: 1em;
  margin: 20px;
  background-color: rgb(59, 109, 109);
  border: 7px solid rgb(3, 61, 62);
  border-radius: 10px;
  align-items: center;
  //como muestra los items
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const LogOutStyle = styled.h3`
  padding: 10px;
  background-color: rgb(110, 161, 160);
  border: 3px solid rgb(3, 61, 62);
  border-radius: 10px;
  &: hover {
    background-color: rgb(157, 109, 109);
    cursor: pointer;
  }
`;
export const TitleStyle = styled.h3`
  text-shadow: rgba(255, 255, 255, 1) 0px 0px 16px;
  text-shadow: rgba(255, 255, 255, 1) 0px 0px 30px;
  text-shadow: rgba(255, 255, 255, 1) 0px 0px 50px;
  &:hover {
    color: rgb(110, 161, 160);
    transform: scale(1.5, 1.3);
  }
`;
