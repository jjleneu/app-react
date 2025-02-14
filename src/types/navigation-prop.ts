import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Index: undefined;
  Menu: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;
export type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, "SignUp">;
export type ForgotPasswordProps = NativeStackScreenProps<RootStackParamList, "ForgotPassword">;
export type IndexScreenProps = NativeStackScreenProps<RootStackParamList, "Index">;
export type MenuScreenProps = NativeStackScreenProps<RootStackParamList, "Menu">;



export type RootTabParamList = {
  Menu: undefined;
  Citas: undefined;
}; 