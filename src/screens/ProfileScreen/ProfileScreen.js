import * as React from "react";
import { StyleSheet, View } from "react-native";

import components from "../../components";
import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";

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
    <View style={styles.view}>
      <components.InlineTextEdit
        fieldName={localization.t("screens.profile.name_field_label")}
        value={user.name}
        setValue={(value) => setUserData("name", value)}
      />
      <components.InlineTextEdit
        fieldName={localization.t("screens.profile.phone_field_label")}
        value={user.phoneNumber}
        setValue={(value) => setUserData("phoneNumber", value)}
      />
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
