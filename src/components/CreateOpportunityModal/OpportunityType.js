import * as React from "react";

import { StyleSheet } from "react-native";

import { RadioButton } from "react-native-paper";

import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityType = ({ setOpportunity }) => {
  const [value, setValue] = React.useState("");

  return (
    <RadioButton.Group
      onValueChange={(value) => {
        setValue(value);
        setOpportunity({ type: value });
      }}
      value={value}
    >
      <RadioButton.Item
        labelStyle={styles.label}
        position="leading"
        label={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_type.request_option"
        )}
        value="request"
      />
      <RadioButton.Item
        labelStyle={styles.label}
        position="leading"
        label={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_type.offer_option"
        )}
        value="offer"
      />
    </RadioButton.Group>
  );
};

const styles = StyleSheet.create({
  label: { color: theme.DefaultTheme.colors.white },
});

export default OpportunityType;
