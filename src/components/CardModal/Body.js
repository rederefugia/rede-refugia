import * as React from "react";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

import theme from "../../utils/theme";

const Body = ({ children }) => {
  return <Card.Content style={styles.content}>{children}</Card.Content>;
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  content: {
    color: theme.DefaultTheme.colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Body;
