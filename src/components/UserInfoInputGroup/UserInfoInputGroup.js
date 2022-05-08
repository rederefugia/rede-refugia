import * as React from "react";

import { TextInput } from "react-native-paper";
import { mask } from "react-native-mask-text";

import InputGroupSkeleton from "../InputGroupSkeleton";
import ComboBox from "../ComboBox";

import localization from "../../utils/localization";

const UserInfoInputGroup = ({ userData, setUserData, styles }) => {
  const gender_options = [
    "",
    localization.t("screens.profile.gender_combo_box.male_option"),
    localization.t("screens.profile.gender_combo_box.female_option"),
    localization.t("screens.profile.gender_combo_box.other_option"),
  ];

  return (
    <InputGroupSkeleton
      left={
        <>
          <TextInput
            label={localization.t("screens.profile.name_text_input_label")}
            value={userData.name}
            onChangeText={(value) => setUserData({ name: value })}
            style={styles.inputText}
          />
        </>
      }
      right={
        <>
          <TextInput
            label={localization.t("screens.profile.birthday_text_input_label")}
            value={mask(userData.birthday, "99/99/9999")}
            onChangeText={(value) => setUserData({ birthday: value })}
            style={styles.inputText}
          />
          <ComboBox
            options={gender_options}
            selection={userData.gender}
            setSelection={(value) => setUserData({ gender: value })}
          />
        </>
      }
    />
  );
};

export default UserInfoInputGroup;
