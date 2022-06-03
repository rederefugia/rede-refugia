import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import { FlatGrid } from "react-native-super-grid";

import firestore from "../../utils/firebase/firestore";
import localization from "../../utils/localization";
import theme from "../../utils/theme";
import components from "../../components";

/**
 * @memberof Screens
 * @name OpportunitiesScreen
 * @description It implemets the Home Screen page
 */
const OpportunitiesScreen = ({ navigation }) => {
  const [opportunities, setOpportunities] = React.useState([]);

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

  const fetchData = React.useCallback(async () => {
    let data = await firestore.find("opportunities");
    data = await Promise.all(
      data.map(async (d) => {
        const owner = await firestore.getById("users", d.owner);
        return { ...d, ...owner };
      })
    );
    setOpportunities(data);
  });

  const isFetchRef = React.useRef(false);
  React.useEffect(() => {
    if (!isFetchRef.current) {
      isFetchRef.current = true;
      fetchData();
    }
  }, [fetchData]);

  return (
    <FlatGrid
      style={styles.gridView}
      data={opportunities}
      spacing={30}
      renderItem={({ item }) => (
        <components.OpportunityCard opportunity={item} />
      )}
    />
  );
};

/**
 * @name styles
 * @description it implements the home screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  gridView: { flex: 1 },
});

export default OpportunitiesScreen;
