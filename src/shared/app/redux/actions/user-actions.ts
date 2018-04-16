import { Types } from "../constants/user-types";
import Request from "axios";

export function getName(id: number) {
  return async function(dispatch: Function, getState: Function) {
    let { data } = await getUserFromAPI(id);
    dispatch({ type: Types.UPDATE_NAME, payload: data });
  };
}
function getUserFromAPI(id: number) {
  return Request.get(`https://jsonplaceholder.typicode.com/users/${id}`);
}
