import * as React from "react";

import { TextInput } from "react-native-paper";
import { mask } from "react-native-mask-text";

import InputGroupSkeleton from "../InputGroupSkeleton";
import ComboBox from "../ComboBox";

import localization from "../../utils/localization";

const UserInfoInputGroup = ({ userData, setUserData, styles }) => {
  
  const gender_options = [
    { value: "", label: "" },
    {
      value: "male",
      label: localization.t("screens.profile.gender_combo_box.male_option"),
    },
    {
      value: "female",
      label: localization.t("screens.profile.gender_combo_box.female_option"),
    },
    {
      value: "other",
      label: localization.t("screens.profile.gender_combo_box.other_option"),
    },
  ];

  const status_options = [
    { value: "", label: "" },
    {
      value: "refugee",
      label: localization.t("screens.profile.status_combo_box.refugee_option"),
    },
    {
      value: "refugee_requester",
      label: localization.t(
        "screens.profile.status_combo_box.refugee_requester_option"
      ),
    },
    {
      value: "stateless",
      label: localization.t(
        "screens.profile.status_combo_box.stateless_option"
      ),
    },
    {
      value: "humanitarian_visa_holder",
      label: localization.t(
        "screens.profile.status_combo_box.humanitarian_visa_holder_option"
      ),
    },
  ];

  const motive_options = [
    { value: "", label: "" },
    {
      value: "race",
      label: localization.t("screens.profile.motive_combo_box.race_option"),
    },
    {
      value: "religion",
      label: localization.t("screens.profile.motive_combo_box.religion_option"),
    },
    {
      value: "gender",
      label: localization.t("screens.profile.motive_combo_box.gender_option"),
    },
    {
      value: "nationality",
      label: localization.t("screens.profile.motive_combo_box.nationality_option"),
    },
    {
      value: "social_group",
      label: localization.t("screens.profile.motive_combo_box.social_group_option"),
    },
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
          <ComboBox
            label={localization.t("screens.profile.status_combo_box_label")}
            options={status_options}
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
            options={gender_options}
            selection={userData.gender}
            setSelection={(value) => setUserData({ gender: value })}
          />
          <ComboBox
            label={localization.t("screens.profile.motive_combo_box_label")}
            options={motive_options}
            selection={userData.motive}
            setSelection={(value) => setUserData({ motive: value })}
          />
        </>
      }
    />
  );
};

export default UserInfoInputGroup;
