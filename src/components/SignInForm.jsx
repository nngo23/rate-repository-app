import { useFormik } from "formik";
import { Text, TextInput, Pressable, View } from "react-native";

export const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit,
  });

  return (
    <View>
      <View>
        <TextInput
          value={formik.values.username}
          onChangeText={formik.handleChange("username")}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          secureTextEntry
          value={formik.values.password}
          onChangeText={formik.handleChange("password")}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={formik.handleSubmit} testID="signInButton">
          <Text>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
};
