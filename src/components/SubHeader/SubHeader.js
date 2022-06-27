import * as React from "react";
import { StyleSheet } from "react-native";

import HorizontalScrollList from "../HorizontalScrollList";

import theme from "../../utils/theme";

const SubHeader = ({ children }) => {
  return (
    <HorizontalScrollList style={styles.view}>{children}</HorizontalScrollList>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: theme.DefaultTheme.colors.purple,
    borderBottomLeftRadius: theme.DefaultTheme.roundnessLarge,
  },
});

export default SubHeader;
