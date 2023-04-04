import styled from "styled-components";
export const Container = styled.form`
  width: 30%;
  margin-top: 80px;
  margin-left: 35%;
  background-color: rgb(59, 109, 109);
  border: 3px solid rgb(3, 61, 62);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  margin: 3px;
`;
export const Input = styled.input`
  width: 50%;
  margin-left: 25%;
  border-radius: 15px;
`;
export const Button = styled.button`
  width: 50%;
  margin:10px;
  margin-left: 25%;
  border-radius: 15px;
  &:hover {
    background-color: gray;
  }
`;
export const ErrorMsg = styled.p`
  color: red;
`;
