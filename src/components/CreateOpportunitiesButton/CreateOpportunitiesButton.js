import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "react-native-paper";

import theme from "../../utils/theme";

const CreateOpportunitiesButton = ({ label }) => {
  return (
    <Button
      mode="contained"
      uppercase={false}
      icon="plus"
      style={styles.button}
    >
      {label}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: { marginHorizontal: theme.DefaultTheme.space },
});

export default CreateOpportunitiesButton;
