import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const SubHeaderItem = ({ icon, label, value, onPress }) => {
  const [enabled, seEnabled] = React.useState(false);

  const handlePress = () => {
    seEnabled(!enabled);
    if (onPress) onPress(label, value);
  };

  return (
    <Button
      uppercase={false}
      compact={true}
      mode={enabled ? "contained" : "outlined"}
      icon={icon}
      onPress={handlePress}
      labelStyle={styles.label}
      style={styles.container}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: theme.DefaultTheme.spaceSmall,
  },
  label: {
    fontSize: theme.DefaultTheme.fontSizeSmall,
  },
});

export default SubHeaderItem;
