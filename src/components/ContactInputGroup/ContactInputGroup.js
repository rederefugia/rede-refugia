import * as React from "react";

import { TextInput } from "react-native-paper";

import InputGroupSkeleton from "../InputGroupSkeleton";
import InputGroupTitle from "../InputGroupTitle";

import localization from "../../utils/localization";

const ContactInputGroup = ({ userData, setUserData, styles }) => {
  return (
    <InputGroupSkeleton
      left={
        <InputGroupTitle
          title={localization.t("screens.profile.contact_group_title")}
        />
      }
      right={
        <>
          <TextInput
            label={localization.t("screens.profile.cellphone_text_input_label")}
            value={userData.phoneNumber}
            onChangeText={(value) => setUserData({ phoneNumber: value })}
            style={styles.inputText}
          />
        </>
      }
    />
  );
};

export default ContactInputGroup;
