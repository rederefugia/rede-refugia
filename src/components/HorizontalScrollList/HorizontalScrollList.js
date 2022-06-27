import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import theme from "../../utils/theme";

const HorizontalScrollList = ({ children, style }) => {
  const setStyle = (defaultStyle) => {
    return style ? StyleSheet.compose(defaultStyle, style) : defaultStyle;
  };

  return (
    <View style={setStyle(styles.view)}>
      <ScrollView horizontal={true}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    marginLeft: theme.DefaultTheme.spaceLarge,
    paddingVertical: theme.DefaultTheme.spaceSmall,
    paddingHorizontal: theme.DefaultTheme.space,
  },
});

export default HorizontalScrollList;
