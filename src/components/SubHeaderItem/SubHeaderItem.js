import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const SubHeaderItem = ({ label, value, active, onPress }) => {
  const handlePress = () => {
    if (onPress) onPress(label, value);
  };

  return (
    <Button
      mode="text"
      uppercase={false}
      compact={true}
      labelStyle={styles.label}
      style={{
        opacity: !active ? 0.5 : 1,
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
