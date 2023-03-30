import styled from "styled-components";
/* Barra de busqueda */
export const SearchBarStyles = styled.div`
  border-radius: 5px;
  display: flex;
  align-items: center;
`;
export const InputStyle = styled.input`
  border-radius: 15px 0px 0px 15px;
  padding: 10px;
`;
export const BtnStyle = styled.button`
  border-radius: 0px 15px 15px 0px;
  padding: 10px;
  background-color: rgb(110, 161, 160);

  &:hover {
    background-color: rgb(163, 216, 215);
  }
`;
export const RandomStyle = styled.button`
  border-radius: 50%;
  padding: 10px;
  background-color: rgb(110, 161, 160);
  &:hover {
    background-color: rgb(163, 216, 215);
  }
`;
