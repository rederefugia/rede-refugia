import * as React from "react";
import { StyleSheet, View } from "react-native";

import { FlatGrid } from "react-native-super-grid";

import theme from "../../utils/theme";

const InputGroupSkeleton = ({ children }) => {
  return (
    <FlatGrid
      adjustGridToStyles={true}
      contentContainerStyle={styles.container}
      additionalRowStyle={styles.row}
      itemContainerStyle={styles.item}
      maxItemsPerRow={2}
      itemDimension={150}
      spacing={16}
      data={children}
      renderItem={({ item }) => item}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.DefaultTheme.space,
    marginBottom: theme.DefaultTheme.noSpace,
    backgroundColor: theme.DefaultTheme.colors.gray,
    borderRadius: theme.DefaultTheme.roundness,
  },
  row: { marginBottom: theme.DefaultTheme.noSpace },
  item: { flex: 1 },
});

export default InputGroupSkeleton;
