import { FETCH_ITEMS, IS_VEG, SORT_PRICE, SORT_RATING } from "./types";
import axios from "axios";

export const loadItems = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
    );

    dispatch({
      type: FETCH_ITEMS,
      payload: data,
    });
  } catch (err) {}
};
export const sortPrice = () => async (dispatch) => {
  try {
    dispatch({
      type: SORT_PRICE,
      payload: null,
    });
  } catch (err) {}
};
export const sortRating = () => async (dispatch) => {
  try {
    dispatch({
      type: SORT_RATING,
      payload: null,
    });
  } catch (err) {}
};
export const vegOnly = () => async (dispatch) => {
  try {
    dispatch({
      type: IS_VEG,
      payload: null,
    });
  } catch (err) {}
};
