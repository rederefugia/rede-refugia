import * as React from "react";

import { StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityLink = ({ opportunity, setOpportunity, setCanGoNext }) => {
  React.useEffect(() => {
    setCanGoNext(true);
  }, [opportunity]);

  return (
    <TextInput
      style={styles.inputText}
      placeholder={localization.t(
        "screens.opportunities.create_opportunity_modal.opportunity_link.link_input_text_label"
      )}
      onChangeText={(value) => {
        setOpportunity({ link: value });
      }}
      value={opportunity.link}
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
