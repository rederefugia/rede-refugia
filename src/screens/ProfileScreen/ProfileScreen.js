import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";
import { mask } from "react-native-mask-text";

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
    <View style={styles.mainContent}>
      <components.InputGroupSkeleton
        left={
          <TextInput
            label={localization.t("screens.profile.name_text_input_label")}
            value={userData.name}
            onChangeText={(value) => setUserData({ name: value })}
            style={styles.inputText}
          />
        }
        right={
          <TextInput
            label={localization.t("screens.profile.birthday_text_input_label")}
            value={mask(userData.birthday, "99/99/9999")}
            onChangeText={(value) => setUserData({ birthday: value })}
            style={styles.inputText}
          />
        }
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
    marginVertical: theme.DefaultTheme.spaceSmall,
  },
  button: { alignSelf: "center", minWidth: "30%" },
});

export default ProfileScreen;
