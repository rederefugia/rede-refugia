import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
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
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [userData, setUserData] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    user
  );

  const handleUpdate = async () => {
    setIsUpdating(true);
    await firestore
      .updateById("users", user.uid, userData)
      .then(() => setUser(userData))
      .catch((error) => console.error(error));
    setIsUpdating(false);
  };

  return (
    <ScrollView style={styles.mainContent}>
      <components.UserInfoInputGroup
        userData={userData}
        setUserData={setUserData}
        styles={styles}
      />
      <components.AddressInputGroup
        userData={userData}
        setUserData={setUserData}
        styles={styles}
      />
      <components.ContactInputGroup
        userData={userData}
        setUserData={setUserData}
        styles={styles}
      />
      <Button
        style={styles.button}
        mode="contained"
        uppercase={false}
        onPress={handleUpdate}
        loading={isUpdating}
      >
        {localization.t("screens.profile.update_button")}
      </Button>
    </ScrollView>
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
    marginVertical: theme.DefaultTheme.spaceSmall,
  },
  button: { alignSelf: "center", minWidth: "30%" },
});

export default ProfileScreen;
