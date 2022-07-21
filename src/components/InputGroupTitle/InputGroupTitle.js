import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";

import theme from "../../utils/theme";

const InputGroupTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    paddingVertical: theme.DefaultTheme.spaceSmall,
    paddingHorizontal: theme.DefaultTheme.space,
    borderRadius: theme.DefaultTheme.roundnessLarge,
    borderWidth: "1px",
    borderColor: theme.DefaultTheme.colors.purpleDark,
    color: theme.DefaultTheme.colors.purpleDark,
    marginBottom: theme.DefaultTheme.spaceLarge,
  },
});

export default InputGroupTitle;
