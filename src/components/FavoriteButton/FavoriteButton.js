import * as React from "react";
import { StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import providers from "../../providers";
import theme from "../../utils/theme";
import firestore from "../../utils/firebase/firestore";

const FavoriteButton = ({ id }) => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const updateFavorite = async (favorites, state) => {
    await firestore.updateById(firestore.COLLECTIONS.USERS, user.uid, {
      favorites,
    });
    await setUser({ ...user, favorites });
    setIsFavorite(state);
  };

  const addFavorite = async () => {
    let favorites = user.favorites ? user.favorites : [];
    favorites.push(id);
    await updateFavorite(favorites, true);
  };

  const removeFavorite = async () => {
    let favorites = user.favorites;
    favorites = favorites.filter(item => item !== id);
    await updateFavorite(favorites, false);
  };

  const update = async () => {
    if (!isFavorite) await addFavorite();
    else await removeFavorite();
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
