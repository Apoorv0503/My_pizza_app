import { ADD_ITEM, DECREASE_ITEM, INCREASE_ITEM } from "../actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return { items: [...state.items, payload] };
    case DECREASE_ITEM:
      console.log(payload);
      return {
        ...state,
        items: state.items.reduce((items, item, index) => {
          if (index === payload && item.quantity > 1) {
            items.push({ ...item, quantity: item.quantity - 1 });
          } else if (index !== payload) items.push(item);

          return items;
        }, []),
      };
    case INCREASE_ITEM:
      return {
        ...state,
        items: state.items.map((item, index) => {
          if (index === payload)
            return { ...item, quantity: item.quantity + 1 };
          else return item;
        }),
      };
    default:
      return state;
  }
}
