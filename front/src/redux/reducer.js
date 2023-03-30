//!
import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
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
      };
    case FILTER:
      if (action.payload === "All") {
        return {
          ...state,
          filteredFavorites: [...state.myFavorites],
        };
      }
      const filteredFavorites = state.myFavorites.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        filteredFavorites: filteredFavorites,
      };

    case ORDER:
      console.log(`llegamos al reducer con ${action.payload}`);
      const sortedFavorites =
        action.payload === "Ascendente"
          ? [...state.filteredFavorites].sort((a, b) => a.id - b.id)
          : [...state.filteredFavorites].sort((a, b) => b.id - a.id);
      return {
        ...state,
        filteredFavorites: sortedFavorites,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
