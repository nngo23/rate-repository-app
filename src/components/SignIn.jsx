import { Link, useNavigate } from "react-router-native";
import { View, StyleSheet, TextInput } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { useFormik } from "formik";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    marginTop: theme.spacing.medium,
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius,
  },
  navButtonText: {
    color: theme.colors.card,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 16,
    fontSize: theme.fontSizes.body,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: theme.borderRadius,
  },
});

const SignIn = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
    navigate("/");
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange("username")}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange("password")}
      />
      <Link to="/" style={styles.navButton} onPress={formik.handleSubmit}>
        <Text style={styles.navButtonText}>Sign in</Text>
      </Link>
    </View>
  );
};

export default SignIn;
