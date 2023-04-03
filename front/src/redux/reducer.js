//!
import {
  FILTER,
  ORDER,
  GET_FAVORITES,
  GET_CHARACTER_DETAIL,
  CLEAN_DETAIL,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  filteredFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER_DETAIL:
      console.log(`en el reducer tenemos ${action.payload}`);
      return {
        ...state,
        characterDetail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        characterDetail: {},
      };
    case GET_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case ORDER:
      const sortedFavorites =
        action.payload === "Ascendente"
          ? [...state.myFavorites].sort((a, b) => a.id - b.id)
          : [...state.myFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: sortedFavorites,
      };

    // FUNCIONA BIEN PERO NO ESTA RENDERIZANDO CORRECTAMENTE
    case FILTER:
      const filteredFavorites =
        action.payload === "All"
          ? state.allCharacters
          : state.allCharacters.filter((char) => char.gender === action.payload);

      //
      return {
        ...state,
        myFavorites: filteredFavorites,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

// console.log("al reducer llegamos con:", action.payload);
// console.log(filteredFavorites);
