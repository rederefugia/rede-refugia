import * as React from "react";

import { View, StyleSheet } from "react-native";

import { TextInput } from "react-native-paper";

import components from "../../components";
import localization from "../../utils/localization";
import theme from "../../utils/theme";
import categories from "../../utils/categories";

const OpportunityCategory = ({ opportunity, setOpportunity, setCanGoNext }) => {
  const checkCompleteness = () => {
    if (opportunity.title.length > 0 && opportunity.category.length > 0) {
      setCanGoNext(true);
    } else setCanGoNext(false);
  };

  React.useEffect(() => {
    checkCompleteness();
  }, [opportunity]);

  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_category.title_input_text_label"
        )}
        onChangeText={(value) => {
          setOpportunity({ title: value });
        }}
        value={opportunity.title}
      />
      <components.ComboBox
        label={localization.t(
          "screens.opportunities.create_opportunity_modal.opportunity_category.combo_box_label"
        )}
        options={[{ value: "", label: "" }].concat(categories)}
        setSelection={(value) => {
          setOpportunity({ category: value });
        }}
        selection={opportunity.category}
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
