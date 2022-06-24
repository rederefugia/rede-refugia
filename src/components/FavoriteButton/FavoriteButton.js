import * as React from "react";
import { StyleSheet, View } from "react-native";

import { IconButton } from "react-native-paper";

import theme from "../../utils/theme";

const FavoriteButton = () => {
  return (
    <IconButton
      icon="heart"
      color={theme.DefaultTheme.colors.purple}
      style={styles.icon}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: theme.DefaultTheme.noSpace,
    justifyContent: "flex-start"
  },
});

export default FavoriteButton;
