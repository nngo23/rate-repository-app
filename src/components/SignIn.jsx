import { Link } from "react-router-native";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";

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
});

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text fontSize="subheading" fontWeight="bold">
        Sign-in view
      </Text>

      <Link to="/" style={styles.navButton}>
        <Text style={styles.navButtonText}>Back to Repositories</Text>
      </Link>
    </View>
  );
};

export default SignIn;
