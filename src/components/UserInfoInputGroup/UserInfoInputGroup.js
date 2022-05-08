import * as React from "react";

import { TextInput } from "react-native-paper";
import { mask } from "react-native-mask-text";

import InputGroupSkeleton from "../InputGroupSkeleton";

import localization from "../../utils/localization";

const UserInfoInputGroup = ({ userData, setUserData, styles }) => {
  return (
    <InputGroupSkeleton
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
  );
};

export default UserInfoInputGroup;
