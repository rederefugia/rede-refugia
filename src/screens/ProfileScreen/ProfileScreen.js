import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

import components from "../../components";
import providers from "../../providers";
import localization from "../../utils/localization";
import firestore from "../../utils/firebase/firestore";
import theme from "../../utils/theme";

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

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  button: {
    ...theme.DefaultStyle.button,
    marginTop: theme.DefaultTheme.space,
    alignSelf: "center",
    minWidth: "30%",
  },
  inputText: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
  },
  inputTextLarge: {
    backgroundColor: theme.DefaultTheme.colors.white,
    borderRadius: theme.DefaultTheme.roundness,
    marginTop: "24px",
  },
});

export default ProfileScreen;
