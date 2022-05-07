import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

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
      <components.InputGroupSkeleton
        left={
          <TextInput
            label={localization.t("screens.profile.name_text_input_label")}
            value={user.name}
            style={styles.inputText}
          />
        }
        right={"Right side 1"}
      />
      <components.InputGroupSkeleton
        left={
          <components.InputGroupTitle
            title={localization.t("screens.profile.address_group_title")}
          />
        }
        right={"Right side 2"}
      />
      <components.InputGroupSkeleton
        left={
          <components.InputGroupTitle
            title={localization.t("screens.profile.contact_group_title")}
          />
        }
        right={"Right side 3"}
      />
    </View>
  );
};

/**
 * @name styles
 * @description it implements the profile screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: {
    ...theme.DefaultStyle.button,
    marginLeft: theme.DefaultTheme.spaceLarge,
  },
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
  },
});

export default ProfileScreen;
