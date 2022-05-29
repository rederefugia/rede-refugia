import * as React from "react";

import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityLink = ({ setOpportunity }) => {
  return (
    <TextInput
      style={styles.inputText}
      placeholder={localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_link.link_input_text_label"
      )}
      onChangeText={(value) => setOpportunity({ link: value })}
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

export default OpportunityLink;
