import * as React from "react";

import { StyleSheet } from "react-native";

import { HelperText, TextInput } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityDescription = ({ opportunity, setOpportunity, setCanGoNext }) => {
  const MAX_LENGTH = 280;

  const handleTextChange = (value) => {
    if (value.length === 0) setCanGoNext(false);
    if (value.length < MAX_LENGTH) {
      setOpportunity({ description: value });
      setCanGoNext(true);
    }
  };

  return (
    <>
      <TextInput
        style={styles.inputText}
        multiline={true}
        maxLength={MAX_LENGTH}
        numberOfLines={5}
        onChangeText={handleTextChange}
        value={opportunity.description}
      />
      <HelperText style={styles.helper} visible={true} type="info">
        {localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_description.counter_label"
        )}{" "}
        {opportunity.description.length}/{MAX_LENGTH}
      </HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: theme.DefaultTheme.space,
  },
  helper: {
    color: theme.DefaultTheme.colors.white,
  },
});

export default OpportunityDescription;
