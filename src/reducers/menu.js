import { FETCH_ITEMS, IS_VEG, SORT_PRICE, SORT_RATING } from "../actions/types";

const initialState = {
  items: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ITEMS:
      return { ...state, items: payload };
    case SORT_PRICE:
      return {
        ...state,
        items: state.items.slice().sort((a, b) => a.price - b.price),
      };
    case SORT_RATING:
      return {
        ...state,
        items: state.items.slice().sort((a, b) => b.rating - a.rating),
      };
    case IS_VEG:
      return {
        ...state,
        items: state.items.slice().filter((a) => a.isVeg === true),
      };

    default:
      return state;
  }
}
