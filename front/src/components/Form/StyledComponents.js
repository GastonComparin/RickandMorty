import styled from "styled-components";
export const FormStyleCont = styled.form`
margin-top:80px;
  background-color: rgb(59, 109, 109);
  display: flex;
  flex-direction: column;
  width: 30%;
  height: auto;
  margin-left: 35%;
  border: 3px solid rgb(3, 61, 62);
  border-radius: 10px;
`;
export const FormStyleLabel = styled.label`
  margin: 10px;
`;
export const FormStyleInput = styled.input`
  width: 50%;
  margin-left: 25%;
  border-radius: 15px;
`;
export const FormStyleButton = styled.button`
  margin: 10px;
  width: 50%;
  margin-left: 25%;
  border-radius: 15px;
  &:hover {
    background-color: gray;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
`;
