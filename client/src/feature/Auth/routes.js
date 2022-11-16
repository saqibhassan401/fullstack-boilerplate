import { SigninContainer } from "./../Auth/Signin";
import { SignupContainer } from "./../Auth/Signup";
import { RestorePasswordContainer } from "./../Auth/RestorePassword";
import { ConfirmRestorePasswordContainer } from "./../Auth/ConfirmRestorePassword";

export const routes = [
  {
    path: "/",
    component: SigninContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/signup",
    component: SignupContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/restore-password",
    component: RestorePasswordContainer,
    isAuth: false,
    exact: true
  },
  {
    path: "/confirm-restore-password/:token",
    component: ConfirmRestorePasswordContainer,
    isAuth: false,
    exact: true
  }
];
