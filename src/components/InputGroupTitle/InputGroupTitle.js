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
    padding: theme.DefaultTheme.space,
    borderRadius: theme.DefaultTheme.roundness,
    color: theme.DefaultTheme.colors.white,
    backgroundColor: theme.DefaultTheme.colors.purpleDark,
    marginBottom: theme.DefaultTheme.spaceLarge,
  },
});

export default InputGroupTitle;
