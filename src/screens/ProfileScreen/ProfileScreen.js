import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

import localization from "../../utils/localization";
import providers from "../../providers";

/**
 * @memberof Screens
 * @name ProfileScreen
 * @description It implemets the Profile Screen page
 */
const ProfileScreen = () => {
  const { user } = React.useContext(providers.auth.AuthContext);

  return (
    <View style={styles.view}>
      <Text>{localization.t("profile") + " " + user.name}</Text>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the profile screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default ProfileScreen;
