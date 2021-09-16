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
      //llevamos al usuario para que incie sesion
      login.authorize();
      localStorage.setItem("logged", "true");
      return state;

    case types.logout:
      //cerramos la sesion del usuario
      login.logout();
      localStorage.setItem("logged", "false");
      return state;

    case types.Check:
      //comprobamos si el ususario ya esta auntenticado
      localStorage.setItem("logged", JSON.stringify(login.checkIsAuthorized()));
      return state;

    default:
      return state;
  }
};
