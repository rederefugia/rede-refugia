import * as React from "react";

import { View, StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import ComboBox from "../ComboBox";
import localization from "../../utils/localization";
import theme from "../../utils/theme";

const OpportunityCategory = ({ setOpportunity }) => {
  const [text, setText] = React.useState("");
  const opts = [
    "living",
    "food",
    "documentation",
    "job",
    "transport",
    "trade",
    "communication",
    "training",
    "other",
  ].map((opt) => {
    return {
      value: opt,
      label: localization.t(
        `screens.opportunities.create_opportunity_modal.opportunity_category.combo_box_options.${opt}_option`
      ),
    };
  });
  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_category.title_input_text_label"
        )}
        onChangeText={(value) => {
          setText(value);
          setOpportunity({ title: value });
        }}
        value={text}
      />
      <ComboBox
        label={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_category.combo_box_label"
        )}
        options={[{ value: "", label: "" }].concat(opts)}
        setSelection={(value) => setOpportunity({ category: value })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: { color: theme.DefaultTheme.colors.white },
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: theme.DefaultTheme.space,
  },
});

export default OpportunityCategory;
