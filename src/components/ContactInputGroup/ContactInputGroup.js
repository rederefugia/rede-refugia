import * as React from "react";

import { mask } from "react-native-mask-text";
import { TextInput } from "react-native-paper";

import InputGroupSkeleton from "../InputGroupSkeleton";
import InputGroupTitle from "../InputGroupTitle";

import localization from "../../utils/localization";

const ContactInputGroup = ({ userData, setUserData, styles }) => {
  return (
    <InputGroupSkeleton
      left={
        <>
          <InputGroupTitle
            title={localization.t("screens.profile.contact_group_title")}
          />
          <TextInput
            label={localization.t("screens.profile.email_text_input_label")}
            value={userData.email}
            style={styles.inputText}
            disabled={true}
          />
        </>
      }
      right={
        <>
          <TextInput
            label={localization.t("screens.profile.cellphone_text_input_label")}
            value={mask(userData.phoneNumber, "(21) 99999-9999")}
            onChangeText={(value) => setUserData({ phoneNumber: value })}
            style={styles.inputText}
          />
          <TextInput
            label={localization.t("screens.profile.land_line_text_input_label")}
            value={mask(userData.landLine, "(21) 9999-9999")}
            onChangeText={(value) => setUserData({ landLine: value })}
            style={styles.inputText}
          />
        </>
      }
    />
  );
};

export default ContactInputGroup;
