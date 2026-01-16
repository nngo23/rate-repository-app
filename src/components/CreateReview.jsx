import { useNavigate } from "react-router-native";
import { View, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import MyText from "./MyText";
import theme from "../theme";
import { useFormik } from "formik";
import useReview from "../hooks/useReview";
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
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Rating is required")
    .min(0, "Rating must be between 0 and 100")
    .max(100, "Rating must be between 0 and 100"),
  text: yup.string(),
});

const CreateReview = () => {
  const navigate = useNavigate();

  const [createReview] = useReview();

  const formik = useFormik({
    initialValues: { ownerName: "", repositoryName: "", rating: "", text: "" },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await createReview({
          ownerName: values.ownerName,
          repositoryName: values.repositoryName,
          rating: values.rating,
          text: values.text,
        });
        const repoId = data.createReview.repositoryId;
        navigate(`/repository/${repoId}`);
      } catch (e) {
        console.log(e);
        Alert.alert("Error", "Failed to create review");
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Repository owner name"
          value={formik.values.ownerName}
          onChangeText={formik.handleChange("ownerName")}
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
          <MyText style={styles.errorText}>{formik.errors.ownerName}</MyText>
        )}

        <TextInput
          style={styles.input}
          placeholder="Repository name"
          value={formik.values.repositoryName}
          onChangeText={formik.handleChange("repositoryName")}
        />
        {formik.touched.repositoryName && formik.errors.repositoryName && (
          <MyText style={styles.errorText}>
            {formik.errors.repositoryName}
          </MyText>
        )}

        <TextInput
          style={styles.input}
          placeholder="Rating between 0 and 100"
          keyboardType="numeric"
          value={formik.values.rating}
          onChangeText={formik.handleChange("rating")}
        />
        {formik.touched.rating && formik.errors.rating && (
          <MyText style={styles.errorText}>{formik.errors.rating}</MyText>
        )}

        <TextInput
          multiline
          style={[styles.input, { height: 150 }]}
          placeholder="Review"
          value={formik.values.text}
          onChangeText={formik.handleChange("text")}
        />
        {formik.touched.text && formik.errors.text && (
          <MyText style={styles.errorText}>{formik.errors.text}</MyText>
        )}

        <Pressable style={styles.navButton} onPress={formik.handleSubmit}>
          <MyText style={styles.navButtonText}>Create a review</MyText>
        </Pressable>
      </View>
    </View>
  );
};

export default CreateReview;
