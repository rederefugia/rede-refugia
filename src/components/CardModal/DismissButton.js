import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const DismissButton = ({ label, onClose, onPress }) => {
  const [loading, setLoading] = React.useState(false);

  return (
    <Button
      style={styles.cardActionsButton}
      uppercase={false}
      mode="contained"
      loading={loading}
      onPress={async () => {
        setLoading(true);
        if (onPress) await onPress();
        setLoading(false);
        onClose();
      }}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
});

export default DismissButton;
