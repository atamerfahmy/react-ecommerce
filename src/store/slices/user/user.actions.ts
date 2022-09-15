import { login } from "./user.service";
import { setUser } from "./user.slice";

// export function loginAction(payload: any) {
//   return function (dispatch: any, getState: any) {
//     return login(payload).then((res) => dispatch(setUser(res.data)));
//   };
// }

export const userLoginAction =
  (payload: any) => (dispatch: any, getState: any) =>
    login(payload).then((res) => {
      return dispatch(setUser(res.data));
    });
