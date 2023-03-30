import styled from "styled-components";

export const DetailCont = styled.div`
  position: relative;
  background-color: rgb(59, 109, 109);
  width: 50%;
  padding: 15px;
  margin-left: 25%;
  border: 6px solid rgb(3, 61, 62);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    background-color: rgb(110, 161, 160);
    margin-top: 30px;
    transform: scale(1.05, 1.1);
    box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -webkit-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -moz-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
  }
`;
export const DetailImg = styled.img`
  margin: 10px;
  border: 6px solid rgb(3, 61, 62);
  border-radius: 15px;
`;
export const DetailTextCont = styled.p`
  width: auto;
  margin: 10px;
  padding: 5px;
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
`;
