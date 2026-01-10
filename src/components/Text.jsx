import { Text as RNText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  default: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  secondaryColor: {
    color: theme.colors.textSecondary,
  },
  primaryColor: {
    color: theme.colors.primary,
  },
  subheadingSize: {
    fontSize: theme.fontSizes.subheading,
  },
  boldWeight: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const combinedStyles = [
    styles.default,
    color === "textSecondary" && styles.secondaryColor,
    color === "primary" && styles.primaryColor,
    fontSize === "subheading" && styles.subheadingSize,
    fontWeight === "bold" && styles.boldWeight,
    style,
  ];

  return <RNText style={combinedStyles} {...props} />;
};

export default Text;
