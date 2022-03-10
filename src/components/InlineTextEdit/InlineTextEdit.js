import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Paragraph,
  Button,
  TextInput,
  HelperText,
  List,
} from "react-native-paper";

import localization from "../../utils/localization";

const InlineTextEdit = ({ fieldName, value, setValue }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editingValue, setEditingValue] = React.useState(value);

  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
    setIsEditing(false);
  };

  return (
    <View>
      {isEditing ? (
        <>
          <TextInput
            value={editingValue}
            onChangeText={setEditingValue}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
          />
          <br />
          <HelperText visible={true}>
            {localization.t("components.inline_text_edit.input_text_helper")}
          </HelperText>
        </>
      ) : (
        <List.Item
          title={fieldName}
          description={value}
          onPress={() => setIsEditing(true)}
          right={(props) => (
            <List.Icon
              {...props}
              icon="square-edit-outline"
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  paragraph: { paddingVertical: "16px", display: "flex" },
  label: { paddingRight: "16px", fontWeight: "bold" },
});

export default InlineTextEdit;
