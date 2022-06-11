import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";

import theme from "../../utils/theme";

const OpportunityCategoryFilter = () => {
  return (
    <View style={styles.view}>
      <Text>Moradia</Text>
      <Text>Moradia</Text>
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

export default OpportunityCategoryFilter;
