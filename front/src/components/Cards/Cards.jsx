import React from "react";
import Card from "../Card/Card";
import { Contenedor } from "./StyledComponents";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavorites } from "../../redux/actions";
// Definición del componente Cards que recibe la lista de personajes

function Cards({ characters, onClose }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <Contenedor>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card // Se renderiza el componente Card con los props necesarios
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </Contenedor>
  );
}

export default Cards;
