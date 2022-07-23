import * as React from "react";
import { StyleSheet } from "react-native";

import { Card } from "react-native-paper";

import theme from "../../utils/theme";

const Actions = ({ children }) => {
  return <Card.Actions style={styles.content}>{children}</Card.Actions>;
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Actions;
