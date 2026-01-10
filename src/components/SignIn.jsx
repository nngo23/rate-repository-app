import { Link, useNavigate } from "react-router-native";
import { View, StyleSheet, TextInput } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { useFormik } from "formik";
import * as yup from "yup";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e1e4e8",
    flex: 1,
  },
  formCard: {
    backgroundColor: theme.colors.card,
    paddingTop: 20,
    paddingHorizontal: 16,
    borderRadius: theme.borderRadius,
    paddingVertical: theme.spacing.medium,
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
    alignSelf: "center",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 8,
    fontSize: theme.fontSizes.body,
    borderWidth: 1,
    borderColor: "light grey",
    borderRadius: 4,
  },
  inputError: {
    borderColor: "#d73a4a",
  },
  errorText: {
    color: "#d73a4a",
    fontSize: theme.fontSizes.body,
    marginBottom: 10,
    marginLeft: 10,
    alignSelf: "flex-start",
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
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
    validationSchema,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
        />
        {formik.touched.username &&
          formik.errors.username &&
          styles.inputError && (
            <Text style={styles.errorText}>{formik.errors.username}</Text>
          )}
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
        />
        {formik.touched.password &&
          formik.errors.password &&
          styles.inputError && (
            <Text style={styles.errorText}>{formik.errors.password}</Text>
          )}
        <Link to="/" style={styles.navButton} onPress={formik.handleSubmit}>
          <Text style={styles.navButtonText}>Sign in</Text>
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
