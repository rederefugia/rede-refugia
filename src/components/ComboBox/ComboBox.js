import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Picker } from "@react-native-picker/picker";

import theme from "../../utils/theme";

const ComboBox = ({ options, selection, setSelection}) => {

  return (
    <Picker
      selectedValue={selection}
      onValueChange={(itemValue, itemIndex) => setSelection(itemValue)}
    >
      {options.map((option) => (
        <Picker.Item label={option} value={option} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  title: {
    alignSelf: "flex-start",
    padding: theme.DefaultTheme.space,
    borderRadius: theme.DefaultTheme.roundness,
    color: theme.DefaultTheme.colors.white,
    backgroundColor: theme.DefaultTheme.colors.purpleDark,
    marginBottom: theme.DefaultTheme.spaceLarge,
  },
});

export default ComboBox;
