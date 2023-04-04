//?IMPORTACION DE COMPONENETES

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/NavBar/NavBar";
import style from "./App.module.css";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

//? Definición del componente App

export function App() {
  //? Definición de los hooks de estado y el hook de navegación
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const username = "gaston@mail.com";
  const password = "gastonC00";

  //? CONTROL de inicio y cierre de sesión
  const Login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };
  const logout = () => {
    setAccess(false);
  };

  //? Efecto para redirigir al usuario si no ha iniciado sesión
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  //?---------------------------------------------------------------

  //? Función para buscar personajes
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";

    if (!id) {
      id = Math.floor(Math.random() * 826) + 1;
    }
    if (characters.find((char) => char.id == id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          // characters.find((element) => element.id === data.id) === undefined
          //   ? setCharacters((characters) => [...characters, data])
          //   : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  };
  //? Función para cerrar la tarjeta de un personaje
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  //? Renderización del componente
  return (
    <div>
      <h1 className={style.h1}>RICK AND MORTY character finder </h1>
      <Nav onSearch={onSearch} />
      <div>
        <Routes>
          <Route path="/" element={<Form Login={Login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;