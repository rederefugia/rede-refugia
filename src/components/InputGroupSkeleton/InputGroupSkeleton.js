import * as React from "react";
import { StyleSheet, View } from "react-native";

import theme from "../../utils/theme";

const InputGroupSkeleton = (props) => {
    const { left, right } = props;

  return (
    <View style={styles.group}>
      <View style={styles.column}>{left}</View>
      <View style={styles.column}>{right}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    ...theme.DefaultStyle.view,
    flexDirection: "row",
    backgroundColor: theme.DefaultTheme.colors.gray,
    borderRadius: theme.DefaultTheme.roundness,
    padding: theme.DefaultTheme.spaceLarge,
    margin: theme.DefaultTheme.space,
  },
  column: { flex: 1 },
});

export default InputGroupSkeleton;
