import { types } from "../types/types";
import { login } from "./index";
/* const  state = {
    name:"manuel",
    logged: true
}
 */

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      login.authorize();
      localStorage.setItem("logged", "true");
      return state;

    case types.logout:
      login.logout();
      localStorage.setItem("logged", "false");
      return state;

    case types.Check:
      if (login.checkIsAuthorized())
        localStorage.setItem(
          "logged",
          JSON.stringify(login.checkIsAuthorized())
        );
      return state;

    default:
      return state;
  }
};
