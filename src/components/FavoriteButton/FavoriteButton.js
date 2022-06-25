import * as React from "react";
import { StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import providers from "../../providers";
import theme from "../../utils/theme";
import firestore from "../../utils/firebase/firestore";

const FavoriteButton = ({ id }) => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const addFavorite = async () => {
    let favorites = user.favorites ? user.favorites : [];
    favorites.push(id);
    await firestore.updateById(firestore.COLLECTIONS.USERS, user.uid, {
      favorites,
    });
    await setUser({ ...user, favorites });
    setIsFavorite(true);
  };

  const update = async () => {
    if (!isFavorite) await addFavorite();
  };

  React.useEffect(() => {
    if (user.favorites)
      setIsFavorite(
        user.favorites.find((opportunityId) => id == opportunityId)
      );
  }, []);

  return (
    <IconButton
      icon={isFavorite ? "heart" : "heart-outline"}
      color={theme.DefaultTheme.colors.purple}
      style={styles.icon}
      onPress={update}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: theme.DefaultTheme.noSpace,
    justifyContent: "flex-start",
  },
});

export default FavoriteButton;
