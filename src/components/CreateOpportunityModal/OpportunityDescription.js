import * as React from "react";

import { StyleSheet } from "react-native";

import { HelperText, TextInput } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityDescription = ({ setOpportunity }) => {
  const [text, setText] = React.useState("");
  const MAX_LENGTH = 280;

  const handleTextChange = (value) => {
    if (value.length < MAX_LENGTH) {
      setText(value);
      setOpportunity(value);
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
      />
      <HelperText style={styles.helper} visible={true} type="info">
        {localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_description.counter_label"
        )}{" "}
        {text.length}/{MAX_LENGTH}
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
