import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const SubHeaderItem = ({ label }) => {
  return (
    <Button
      mode="text"
      uppercase={false}
      compact={true}
      labelStyle={styles.label}
      style={styles.button}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.DefaultTheme.colors.white,
    fontSize: theme.DefaultTheme.fontSizeSmall,
    marginVertical: theme.DefaultTheme.noSpace
  },
  button: {
    borderRightColor: theme.DefaultTheme.colors.white,
    borderRightWidth: "1px",
    borderRadius: theme.DefaultTheme.noSpace,
  },
});

export default SubHeaderItem;
