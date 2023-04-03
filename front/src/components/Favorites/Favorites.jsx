//!------------------------
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { Contenedor } from "./StyledComponents";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const order = (event) => {
    console.log(`pasó por el order con ${event.target.value}`);
    dispatch(orderCards(event.target.value));
  };

  const filter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <select onChange={order}>
        {["Ascendente", "Descendente"].map((event, index) => (
          <option value={event} key={index}>
            {event}
          </option>
        ))}
      </select>
      <select onChange={filter}>
        {["All", "Male", "Female", "unknown", "Genderless"].map(
          (event, index) => (
            <option value={event} key={index}>
              {event}
            </option>
          )
        )}
      </select>{" "}
      <Contenedor>
        {favorites.length === 0 ? (
          <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
            ¡Add a favorite!
          </p>
        ) : (
          favorites.map(({ id, name, species, gender, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              showCloseButton={false}
            />
          ))
        )}
      </Contenedor>
    </>
  );
}
