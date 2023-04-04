import {
  Container,
  Label,
  Input,
  Button,
  ErrorMsg,
} from "./StyledComponents";
import { useState } from "react";
import { validate } from "./validation";

const Form = (props) => {
  // Definir el estado inicial del usuario y los errores en el formulario
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  // Definir la función handleInputChange que se ejecuta cuando se cambia algún input en el formulario
  const handleInputChange = (event) => {
    // Actualizar el estado del usuario con el nuevo valor del input
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    // Validar el campo que se modificó y actualizar el estado de los errores
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  // Definir la función handleSubmit que se ejecuta cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // Llamar a la función Login pasando el estado actual del usuario como argumento
    props.Login(userData);
    // Si no hay errores en el formulario, resetear los estados del usuario y los errores
    const propsArr = Object.keys(errors);
    if (propsArr.length === 0) {
      setErrors({
        username: "",
        password: "",
      });
      setUserData({
        username: "",
        password: "",
      });
    }
  };

  // Renderizar el formulario con sus respectivos inputs y mensajes de error
  return (
    <div>
      <Container onSubmit={handleSubmit}>
        {/* <h3>usuario : gaston@mail.com</h3> <h3>password: gastonC00</h3> */}

        <Label name="username">Username:</Label>
        <Input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        {errors.username !== "" ? <ErrorMsg>{errors.username}</ErrorMsg> : ""}

        <Label name="password">Password:</Label>
        <Input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        {errors.password !== "" ? <ErrorMsg>{errors.password}</ErrorMsg> : ""}
        <Button type="submit">Login</Button>
      </Container>
    </div>
  );
};
export default Form;
