import { useState } from "react";
import {
  SearchBarStyles,
  InputStyle,
  BtnStyle,
  RandomStyle,
} from "./StyledComponents";
import { useLocation } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  // Estado local que almacena el ID ingresado por el usuario
  const [id, setId] = useState("");
  // Función que se ejecuta cada vez que el usuario ingresa texto en el input
  const handleChange = (event) => {
    setId(event.target.value);
  };
  // Hook que permite obtener la ubicación actual de la página
  const url = useLocation();
  // Si la ruta actual no es "/home", se muestra un input de búsqueda con botón deshabilitado
  if (url.pathname !== "/home") {
    return (
      <SearchBarStyles>
        <InputStyle
          placeholder="Ingresa el ID "
          type="search"
          onChange={handleChange}
        />

        <BtnStyle disabled onClick={() => onSearch(id)}>
          Agregar
        </BtnStyle>
      </SearchBarStyles>
    );
  } else {
    // Si la ruta actual es "/home", se muestra un input de búsqueda con botón habilitado
    return (
      <SearchBarStyles>
        <InputStyle
          placeholder="Ingresa el ID o agrega uno random"
          type="search"
          onChange={handleChange}
        />

        <BtnStyle onClick={() => onSearch(id)}>Agregar</BtnStyle>
      </SearchBarStyles>
    );
  }
}
