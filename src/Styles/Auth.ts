import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  containerInputs: {
    width: "100%",
  },

  containerTitulo: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 25,
  },

  input: { flex: 4, justifyContent: "center", alignItems: "center" },

  button: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7B3AED",
  },

  textButton: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },

  separator: {
    marginVertical: 15,
  },

  singUpContainer: {
    flexDirection: "row",
    gap: 10,
  },

  textSignUp: {
    fontWeight: "bold",
    fontSize: 16,
  },

  forgotPassword: {
    fontWeight: "bold",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#7B3AED",
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitulo: {
    fontSize: 16,
    color: "#888",
  },

  logo: {
    marginBottom: 10,
  },

  sectionStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 50,
    borderRadius: 5,
  },

  imageStyle: {
    flexBasis: "12%",
    paddingLeft: 10,
  },
  errorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  errorLabel: {
    color: "red",
  }
});

export default styles;