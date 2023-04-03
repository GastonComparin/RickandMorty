import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCharacterDetail, cleanDetail } from "../../redux/actions";
import {
  DetailCont,
  DetailImg,
  DetailTextCont,
  CardBtn,
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
      {character?.name && ( // Mostrar el detalle del personaje solo si tiene un nombre (para evitar errores de renderizado)
        <DetailCont>
          <DetailTextCont>
            <h1>
              Name:<p>{character?.name}</p>{" "}
            </h1>

            <p>
              Specie: <p>{character?.species}</p>
            </p>

            <p>
              Gender: <p>{character?.gender}</p>
            </p>

            <p>
              Origin: <p>{character?.origin?.name}</p>
            </p>
          </DetailTextCont>
          <DetailImg src={character?.image} alt={character.name} />
          <Link to="/home">
            <CardBtn>X</CardBtn>
          </Link>
          <IdNumber>{character.id}</IdNumber>
        </DetailCont>
      )}
      {<h3>Loading...</h3>}
    </div>
  );
}
