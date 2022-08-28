import { ADD_ITEM, DECREASE_ITEM, INCREASE_ITEM } from "./types";

export const addItem = (item) => async (dispatch) => {
  try {
    let cartItem = { ...item, quantity: 1 };
    dispatch({
      type: ADD_ITEM,
      payload: cartItem,
    });
  } catch (err) {}
};
export const increaseItem = (index) => async (dispatch) => {
  try {
    dispatch({
      type: INCREASE_ITEM,
      payload: index,
    });
  } catch (err) {}
};
export const decreaseItem = (index) => async (dispatch) => {
  try {
    dispatch({
      type: DECREASE_ITEM,
      payload: index,
    });
  } catch (err) {}
};
