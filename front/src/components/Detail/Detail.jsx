import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../../redux/actions";
import {
  Container,
  Image,
  TextContainer,
  Button,
  IdNumber,
} from "./StyledComponents";
export default function Detail() {
  //!ESTADOS
  const dispatch = useDispatch();
  const character = useSelector((state) => state.characterDetail);
  const { detailId } = useParams();

  useEffect(() => {
    dispatch(getCharacterDetail(detailId));

    return () => {
      dispatch(cleanDetail());
    };
  }, [detailId]);

  // Cargar el personaje una vez que el componente esté montado
  console.log(`que onda con el ${character}`);
  //!Renderiza el componente
  return (
    <div>
      {character?.name ? (
        <Container>
          <TextContainer>
            Name:<h3>{character?.name}</h3>
            <p>
              Specie: <p>{character?.species}</p>
            </p>
            <p>
              Gender: <p>{character?.gender}</p>
            </p>
            <p>
              Origin: <p>{character?.origin?.name}</p>
            </p>
          </TextContainer>
          <Image src={character?.image} alt={character.name} />
          <Link to="/home">
            <Button>X</Button>
          </Link>
          <IdNumber>{character.id}</IdNumber>
        </Container>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
