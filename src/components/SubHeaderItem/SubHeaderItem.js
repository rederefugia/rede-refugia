import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const SubHeaderItem = ({ label, value, onPress }) => {
  const [enabled, seEnabled] = React.useState(false);

  const handlePress = () => {
    seEnabled(!enabled);
    if (onPress) onPress(label, value);
  };

  return (
    <Button
      mode="text"
      uppercase={false}
      compact={true}
      labelStyle={styles.label}
      style={{
        opacity: !enabled ? 0.5 : 1,
        borderRightColor: theme.DefaultTheme.colors.white,
        borderRightWidth: "1px",
        borderRadius: theme.DefaultTheme.noSpace,
      }}
      onPress={handlePress}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.DefaultTheme.colors.white,
    fontSize: theme.DefaultTheme.fontSizeSmall,
    marginVertical: theme.DefaultTheme.noSpace,
  },
});

export default SubHeaderItem;
