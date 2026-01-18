import { useNavigate } from "react-router-native";
import { View, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import MyText from "./MyText";
import theme from "../theme";
import { useFormik } from "formik";
import useSignUp from "../hooks/useSignUp";
import useSignIn from "../hooks/useSignIn";
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
    borderColor: "lightgrey",
    borderRadius: 4,
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
  username: yup
    .string()
    .required("Username is required")
    .min(5, "Username must be at least 5 characters")
    .max(50, "Username must be at most 50 characters"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters")
    .max(50, "Password must be at most 50 characters"),
  passwordConfirm: yup
    .string()
    .required("Password confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const SignUp = () => {
  const navigate = useNavigate();

  const [signUp] = useSignUp();
  const [signIn] = useSignIn();

  const formik = useFormik({
    initialValues: { username: "", password: "", passwordConfirm: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await signUp({
          username: values.username,
          password: values.password,
        });
        await signUp({
          username: values.username,
          password: values.password,
        });
        await signIn({
          username: values.username,
          password: values.password,
        });
        navigate("/");
      } catch (e) {
        console.log(e);
        Alert.alert("Error", "Failed to sign up");
      }
    },
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
        {formik.touched.username && formik.errors.username && (
          <MyText style={styles.errorText}>{formik.errors.username}</MyText>
        )}

        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
        />
        {formik.touched.password && formik.errors.password && (
          <MyText style={styles.errorText}>{formik.errors.password}</MyText>
        )}

        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password confirmation"
          value={formik.values.passwordConfirm}
          onChangeText={formik.handleChange("passwordConfirm")}
        />
        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
          <MyText style={styles.errorText}>
            {formik.errors.passwordConfirm}
          </MyText>
        )}

        <Pressable style={styles.navButton} onPress={formik.handleSubmit}>
          <MyText style={styles.navButtonText}>Sign up</MyText>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
