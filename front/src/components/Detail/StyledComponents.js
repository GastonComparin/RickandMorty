import styled from "styled-components";

export const DetailCont = styled.div`
  width: 50%;
  margin-left:25%;
  position: relative;
  background-color: rgb(59, 109, 109);
  border: 6px solid rgb(3, 61, 62);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: rgb(110, 161, 160);
    margin-top: 30px;
    transform: scale(1.05, 1.14);
    box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -webkit-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -moz-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
  }
`;
export const DetailImg = styled.img`
  border: 6px solid rgb(3, 61, 62);
  border-radius: 15px;
`;
export const DetailTextCont = styled.p`
  background-color: rgb(110, 161, 160);
  border: 6px solid rgb(3, 61, 62);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 1000;
`;
export const CardBtn = styled.button`
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgb(157, 109, 109);
  position: absolute;
  top: 10px;
  right: 5px;
  &:hover {
    background-color: rgb(139, 90, 90);
    cursor: pointer;
  }
`;
export const IdNumber = styled.p`
  border: 2px solid black;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: violet;
`;
