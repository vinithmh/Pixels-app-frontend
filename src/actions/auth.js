import { AUTH } from "../constants/actionTypes";
import * as API from "../api/index";

export const signIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.signIn(formData);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    const { data } = await API.signUp(formData);

    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
