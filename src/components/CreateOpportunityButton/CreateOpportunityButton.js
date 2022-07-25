import * as React from "react";
import { StyleSheet } from "react-native";

import { Button } from "react-native-paper";

import CreateOpportunityModal from "../CreateOpportunityModal";

import theme from "../../utils/theme";

const CreateOpportunityButton = ({ label }) => {
  return (
    <CreateOpportunityModal
      trigger={
        <Button
          mode="contained"
          uppercase={false}
          icon="plus"
          style={styles.button}
          contentStyle={{ backgroundColor: theme.DefaultTheme.colors.purple }}
        >
          {label}
        </Button>
      }
    />
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: { margin: theme.DefaultTheme.space },
});

export default CreateOpportunityButton;
