import * as Yup from "yup";

export type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginForm = {
  email: string;
  password: string;
}

export const validationSignUpSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  email: Yup.string().email("correo no válido").required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    .required("Este campo es obligatorio"),
});


export const validationLoginSchema = Yup.object().shape({
  email: Yup.string().email("correo no válido").required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
});