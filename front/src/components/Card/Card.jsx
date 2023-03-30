import React, { useState, useEffect } from "react";
import {
  Contenedor,
  CardBtn,
  FavBtn,
  Cardh2,
  CardImg,
  ContTxt,
} from "./StyledComponents";
import { Link } from "react-router-dom";
import { getFavorites, removeFavorite } from "../../redux/actions";
import { useDispatch, connect } from "react-redux";
import axios from "axios";

//!COMIENZO DE LA FUNCION

function Card({ id, name, species, gender, image, onClose, myFavorites }) {
  //! ESTADOS Y FUCIONES PARA EL MANEJO DE FAVORTITOS
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const addFavorite = async (character) => {
    await axios.post("http://localhost:3001/rickandmorty/fav", character);
    dispatch(getFavorites()).then((res) => console.log("Personaje agregado a favs"));
  };

  const removeFavorite = async (id) => {
    await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
    dispatch(getFavorites()).then((res) => console.log("Personaje eliminado de favs"));
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false); // Si está en favoritos, establecer el estado isFav en false
      removeFavorite(id); // Remover el personaje de favoritos mediante la función removeFavorite
    } else {
      setIsFav(true); // Si no está en favoritos, establecer el estado isFav en true

      addFavorite({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };
  //!ESTO ES LO QUE VA MOSTRAR CUANDO LA MANDE A CARDS
  return (
    <Contenedor>
      {isFav ? (
        <FavBtn onClick={handleFavorite}>❤️</FavBtn>
      ) : (
        <FavBtn onClick={handleFavorite}>🤍</FavBtn>
      )}
      <CardImg src={image} />
      <Link to={`/detail/${id}`}>
        <Cardh2>{name}</Cardh2>
      </Link>
      <ContTxt>
        <Cardh2>{species}</Cardh2>
        <Cardh2>{gender}</Cardh2>
      </ContTxt>
      <CardBtn onClick={onClose}>X</CardBtn>
    </Contenedor>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeFavorite: (id) => {
      dispatch(removeFavorite(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
