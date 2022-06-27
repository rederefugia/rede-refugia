import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { Button } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";

import firestore from "../../utils/firebase/firestore";
import localization from "../../utils/localization";
import theme from "../../utils/theme";
import components from "../../components";
import categories from "../../utils/categories";

const OpportunitiesScreen = ({ navigation }) => {
  const [opportunities, setOpportunities] = React.useState([]);
  const [categoryFilter, setCategoryFilter] = React.useState([]);

  const updateCategoryFilter = (label, value) => {
    if (categoryFilter.includes(value))
      setCategoryFilter(categoryFilter.filter((item) => item !== value));
    else setCategoryFilter(categoryFilter.concat([value]));
  };

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
    let data = [];
    if (categoryFilter.length == 0)
      data = await firestore.find(firestore.COLLECTIONS.OPPORTUNITIES);
    else
      data = await firestore.find(
        firestore.COLLECTIONS.OPPORTUNITIES,
        firestore.filter("category", "in", categoryFilter)
      );
    data = await Promise.all(
      data.map(async (d) => {
        const owner = await firestore.getById(
          firestore.COLLECTIONS.USERS,
          d.owner
        );
        return { ...d, owner };
      })
    );
    setOpportunities(data);
  });

  React.useEffect(() => {
    fetchData();
  }, [categoryFilter]);

  return (
    <>
      <components.SubHeader>
        {categories.map(({ value, label }, index) => (
          <components.SubHeaderItem
            key={index}
            label={label}
            value={value}
            onPress={updateCategoryFilter}
          />
        ))}
      </components.SubHeader>
      <components.HorizontalScrollList>
        <Button mode="contained" icon="heart" uppercase={false} compact={true}>
          {localization.t(
            "screens.opportunities.favorites_filter_button_label"
          )}
        </Button>
      </components.HorizontalScrollList>
      <FlatGrid
        style={styles.gridView}
        data={opportunities}
        spacing={30}
        itemDimension={300}
        renderItem={({ item }) => (
          <components.OpportunityCard opportunity={item} updateScreen={fetchData} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  gridView: { flex: 1 },
});

export default OpportunitiesScreen;
