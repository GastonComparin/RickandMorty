import { AboutStyle } from "./StyledComponents";
export default function About() {
  return (
    <div>
      <AboutStyle>
        Bienvenido a mi aplicación de Rick and Morty, donde podrás encontrar
        toda la información sobre tus personajes favoritos de la serie.
        <p>
          La aplicación está diseñada para buscar en el servidor de Rick and
          Morty toda la información necesaria sobre los personajes y mostrarla
          en tarjetas fáciles de leer y entender.
        </p>
        <br />
        <p>
          En esta aplicación encontrarás información detallada sobre cada
          personaje, como su nombre, género, especie, origen, ubicación actual y
          su foto.
        </p>
        <br />
        <br />
        <p>Aplicacion desarrollada por Gaston Comparin</p>
      </AboutStyle>
    </div>
  );
}
