import styled from "styled-components";

//"Tarjeta" individual
const Contenedor = styled.div`
  background-color: rgb(59, 109, 109);
  border-radius: 10%;
  border: 3px solid rgb(3, 61, 62);
  padding-top: 10px;
  width: 22%;
  margin-bottom: 15px;
  &:hover {
    background-color: rgb(110, 161, 160);
    transform: translateY(-10px);
    box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -webkit-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
    -moz-box-shadow: 10px 8px 119px 53px rgba(110, 161, 160, 0.75);
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
//Imagen
const CardImg = styled.img`
  border-radius: 30px;
  border-color: rgb(3, 61, 62);
  border-width: 3px;
  border-style: solid;
  width: 90%;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
//textos dentro de la imagen
const Cardh2 = styled.h2`
  border-style: solid;
  border-width: 3px;
  border-color: black;
  border-radius: 15px;
  background-color: white;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 3px;
  padding-right: 3px;
`;
//Boton de cierre
const CardBtn = styled.button`
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgb(157, 109, 109);
  &:hover {
    background-color: rgb(139, 90, 90);
    cursor: pointer;
  }
`;
//boton de fav
const FavBtn = styled.button`
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: rgb(110, 161, 160);
  margin-bottom: 4px;
  &:hover {
    background-color: rgb(59, 109, 109);
    cursor: pointer;
  }
`;
//alineacion del text dentro de la tarjeta
const ContTxt = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export { CardBtn, Cardh2, CardImg, Contenedor, ContTxt, FavBtn };
