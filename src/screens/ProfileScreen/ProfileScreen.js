import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

import components from "../../components";
import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";
import theme from "../../utils/theme";

/**
 * @memberof Screens
 * @name ProfileScreen
 * @description It implemets the Profile Screen page
 */
const ProfileScreen = () => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);

  const setUserData = (paramName, paramValue) => {
    firestore
      .updateById("users", user.uid, { [paramName]: paramValue })
      .then(() => setUser({ ...user, [paramName]: paramValue }))
      .catch((error) => console.error(error));
  };

  return (
    <View style={styles.mainContent}>
      <View style={styles.row}>
        <Button mode="contained" style={styles.button}>
          {localization.t("screens.profile.update_button")}
        </Button>
        <Button mode="contained" style={styles.button}>
          {localization.t("screens.profile.save_button")}
        </Button>
      </View>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the profile screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flex: 1,
  },
  button: {
    ...theme.DefaultStyle.button,
    marginLeft: theme.DefaultTheme.spaceLarge,
  }
});

export default ProfileScreen;
