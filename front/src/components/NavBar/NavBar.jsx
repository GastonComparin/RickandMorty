import { Container, LogOutStyle, TitleStyle } from "./StyledComponents";
import SearchBar from "../SearchBar/SearchBar";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ onSearch }) {
  const url = useLocation();
  if (url.pathname !== "/") {
    return (
      <div>
        <Container>
          
          <Link to="/">
            <LogOutStyle>LogOut</LogOutStyle>
          </Link>
          
          <SearchBar onSearch={onSearch} />
          <Link to="/about">
            <TitleStyle>About</TitleStyle>
          </Link>
          <Link to="/favorites">
            <TitleStyle>Favorites</TitleStyle>
          </Link>
          <Link to="/home">
            <TitleStyle>Home</TitleStyle>
          </Link>
        </Container>
      </div>
    );
  }
}
