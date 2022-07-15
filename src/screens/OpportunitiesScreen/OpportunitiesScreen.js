import * as React from "react";
import { StyleSheet } from "react-native";

import { FlatGrid } from "react-native-super-grid";

import providers from "../../providers";
import firestore from "../../utils/firebase/firestore";
import localization from "../../utils/localization";
import theme from "../../utils/theme";
import components from "../../components";
import categories from "../../utils/categories";

const OpportunitiesScreen = ({ navigation }) => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [opportunities, setOpportunities] = React.useState([]);
  const [categoryFilter, setCategoryFilter] = React.useState([]);
  const [isOnlyFavorite, showOnlyFavorites] = React.useState(false);
  const [isOwner, showOnlyOwned] = React.useState(false);

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
    data = await firestore.find(
      firestore.COLLECTIONS.OPPORTUNITIES,
      categoryFilter.length > 0
        ? firestore.filter("category", "in", categoryFilter)
        : undefined,
      isOnlyFavorite
        ? firestore.filter("id", "in", user.favorites, true)
        : undefined,
      isOwner ? firestore.filter("owner", "==", user.uid) : undefined
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
  }, [categoryFilter, isOnlyFavorite, isOwner]);

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
        <components.SwitchButton
          icon="heart"
          label={localization.t(
            "screens.opportunities.favorites_filter_button_label"
          )}
          onPress={() => showOnlyFavorites(!isOnlyFavorite)}
        />
        <components.SwitchButton
          label={localization.t(
            "screens.opportunities.owner_filter_button_label"
          )}
          onPress={() => showOnlyOwned(!isOwner)}
        />
      </components.HorizontalScrollList>
      <FlatGrid
        style={styles.gridView}
        data={opportunities}
        spacing={30}
        itemDimension={300}
        renderItem={({ item }) => (
          <components.OpportunityCard
            opportunity={item}
            updateScreen={fetchData}
          />
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
