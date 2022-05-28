import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import localization from "../../utils/localization";
import theme from "../../utils/theme";
import components from "../../components";

/**
 * @memberof Screens
 * @name OpportunitiesScreen
 * @description It implemets the Home Screen page
 */
const OpportunitiesScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <components.CreateOpportunityButton
          label={localization.t(
            "screens.opportunities.create_header_button_label"
          )}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.view}>
      <Text>{localization.t("screens.opportunities.name")}</Text>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the home screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  ...theme.DefaultStyle,
});

export default OpportunitiesScreen;
