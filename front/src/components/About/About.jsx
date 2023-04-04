import { AboutStyle } from "./StyledComponents";
export default function About() {
  return (
    <div>
      <AboutStyle
        style={{
          fontFamily: "Nunito Sans",
          fontSize: "20px",
          fontWeight: "1000",
        }}
      >
        ¡Bienvenidos a mi aplicación de Rick and Morty!
        <p />
        Esta fue creada como proyecto integrador del Bootcamp de Henry,
        utilizando tecnologías como JS, React, Redux y Express para el
        desarrollo. En ella, podrás buscar personajes por su ID o
        aleatoriamente, y verlos aparecer en la vista principal. Además, puedes
        eliminar o agregar personajes a favoritos.
        <p /> Si agregas un personaje a tus favoritos, puedes filtrarlos por
        género y ordenarlos por número de ID ascendente o descendente. También
        puedes seleccionar un personaje para ver su detalle completo en otra
        vista.
        <p /> Estoy muy orgulloso de este proyecto y espero que disfrutes usando
        esta aplicación tanto como yo disfruté creándola.
        <p />
        ¡Gracias por visitar la página!
        <br />
        <br />
        <p>Aplicacion desarrollada por Gaston Comparin</p>
      </AboutStyle>
    </div>
  );
}
