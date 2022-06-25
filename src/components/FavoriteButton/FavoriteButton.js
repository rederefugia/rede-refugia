import * as React from "react";
import { StyleSheet } from "react-native";

import { IconButton } from "react-native-paper";

import providers from "../../providers";
import theme from "../../utils/theme";

const FavoriteButton = ({ id }) => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);
  const [isFavorite, setIsFavorite] = React.useState(false);

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
