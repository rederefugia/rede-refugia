import * as React from "react";

import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityLocation = ({ setOpportunity }) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_location.zip_code_input_text_label"
      )}
      onChangeText={(value) => setOpportunity({ zipCode: value })}
    />
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: theme.DefaultTheme.space,
  },
});

export default OpportunityLocation;
