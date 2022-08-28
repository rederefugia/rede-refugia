import * as React from "react";

import { TextInput } from "react-native-paper";

import components from "../../components";
import localization from "../../utils/localization";
import masks from "../../utils/masks";

const AddressInputGroup = ({ userData, setUserData, styles }) => {
  return (
    <components.InputGroupSkeleton>
      <components.InputGroupTitle
        title={localization.t("screens.profile.address_group_title")}
      />
      <TextInput
        label={localization.t("screens.profile.city_text_input_label")}
        value={userData.city}
        onChangeText={(value) => setUserData({ city: value })}
        style={styles.inputText}
      />
      <TextInput
        label={localization.t("screens.profile.zip_code_text_input_label")}
        value={masks.parseZipCode(userData.zipCode)}
        onChangeText={(value) => {
          if (value.length <= 9) setUserData({ zipCode: value });
        }}
        style={styles.inputText}
      />
      <TextInput
        label={localization.t("screens.profile.neighborhood_text_input_label")}
        value={userData.neighborhood}
        onChangeText={(value) => setUserData({ neighborhood: value })}
        style={styles.inputText}
      />
      <TextInput
        label={localization.t("screens.profile.state_text_input_label")}
        value={userData.state}
        onChangeText={(value) => setUserData({ state: value })}
        style={styles.inputText}
      />
      <TextInput
        label={localization.t("screens.profile.street_text_input_label")}
        value={userData.street}
        onChangeText={(value) => setUserData({ street: value })}
        style={styles.inputText}
      />
    </components.InputGroupSkeleton>
  );
};

export default AddressInputGroup;
