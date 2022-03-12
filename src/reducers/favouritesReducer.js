import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  GET_FAVOURITE,
} from "../constants/favouriteConstants";

const initialState = {
  favouriteItems: [],
};

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      const item = action.payload;
      console.log(state.favouriteItems);

      if (state.favouriteItems !== undefined) {
        const existingItem = state.favouriteItems.find((x) => x.id === item.id);

        if (!existingItem) {
          return { ...state, favouriteItems: [...state.favouriteItems, item] };
        }

        return {
          ...state,
          favouriteItems: state.favouriteItems.map((x) =>
            x.id === item.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          favouriteItems: [action.payload],
        };
      }
    case DELETE_FAVOURITE:
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          (x) => x.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
