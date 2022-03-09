import * as React from "react";
import { StyleSheet, View } from "react-native";

import components from "../../components";
import localization from "../../utils/localization";
import providers from "../../providers";

/**
 * @memberof Screens
 * @name ProfileScreen
 * @description It implemets the Profile Screen page
 */
const ProfileScreen = () => {
  const { user, setUser } = React.useContext(providers.auth.AuthContext);

  return (
    <View style={styles.view}>
      <components.InlineTextEdit fieldName="Name" value={user.name} />
    </View>
  );
};

/**
 * @name styles
 * @description it implements the profile screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "baseline",
    padding: "16px",
  },
});

export default ProfileScreen;
