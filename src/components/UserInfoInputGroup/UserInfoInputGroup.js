import * as React from "react";

import { TextInput } from "react-native-paper";
import { mask } from "react-native-mask-text";

import InputGroupSkeleton from "../InputGroupSkeleton";
import ComboBox from "../ComboBox";

import localization from "../../utils/localization";

const UserInfoInputGroup = ({ userData, setUserData, styles }) => {
  const options_map = [
    { name: "gender", values: ["male", "female", "other"] },
    {
      name: "status",
      values: [
        "refugee",
        "refugee_requester",
        "stateless",
        "humanitarian_visa_holder",
      ],
    },
    {
      name: "motive",
      values: ["race", "religion", "gender", "nationality", "social_group"],
    },
  ];

  const options = options_map.map((group) => {
    let opts = group.values.map((opt) => {
      return {
        value: opt,
        label: localization.t(
          `screens.profile.${group.name}_combo_box.${opt}_option`
        ),
      };
    });
    return [{ value: "", label: "" }].concat(opts);
  });

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
          <ComboBox
            label={localization.t("screens.profile.status_combo_box_label")}
            options={options[1]}
            selection={userData.status}
            setSelection={(value) => setUserData({ status: value })}
          />
          <TextInput
            label={localization.t("screens.profile.country_text_input_label")}
            value={userData.name}
            onChangeText={(value) => setUserData({ country: value })}
            style={styles.inputTextLarge}
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
            label={localization.t("screens.profile.gender_combo_box_label")}
            options={options[0]}
            selection={userData.gender}
            setSelection={(value) => setUserData({ gender: value })}
          />
          <ComboBox
            label={localization.t("screens.profile.motive_combo_box_label")}
            options={options[2]}
            selection={userData.motive}
            setSelection={(value) => setUserData({ motive: value })}
          />
        </>
      }
    />
  );
};

export default UserInfoInputGroup;
