import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import theme from "../../utils/theme";

const SubHeader = ({ children }) => {
  return (
    <View style={styles.view}>
      <ScrollView horizontal={true}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    backgroundColor: theme.DefaultTheme.colors.purple,
    marginLeft: theme.DefaultTheme.spaceLarge,
    borderBottomLeftRadius: theme.DefaultTheme.roundnessLarge,
    paddingVertical: theme.DefaultTheme.spaceSmall,
    paddingHorizontal: theme.DefaultTheme.space,
  },
});

export default SubHeader;
