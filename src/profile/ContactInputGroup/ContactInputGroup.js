import * as React from "react";

import { TextInput } from "react-native-paper";

import components from "../../components";
import localization from "../../utils/localization";
import masks from "../../utils/masks";

const ContactInputGroup = ({ userData, setUserData, styles }) => {
  return (
    <components.InputGroupSkeleton>
      <components.InputGroupTitle
        title={localization.t("screens.profile.contact_group_title")}
      />
      <TextInput
        label={localization.t("screens.profile.cellphone_text_input_label")}
        value={masks.parsePhoneNumber(userData.phoneNumber)}
        onChangeText={(value) => setUserData({ phoneNumber: value })}
        style={styles.inputText}
      />
      <TextInput
        label={localization.t("screens.profile.email_text_input_label")}
        value={userData.email}
        style={styles.inputText}
        disabled={true}
      />
      <TextInput
        label={localization.t("screens.profile.land_line_text_input_label")}
        value={masks.parseLandLine(userData.landLine)}
        onChangeText={(value) => setUserData({ landLine: value })}
        style={styles.inputText}
      />
    </components.InputGroupSkeleton>
  );
};

export default ContactInputGroup;
