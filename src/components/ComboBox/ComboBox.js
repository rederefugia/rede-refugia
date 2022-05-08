import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import theme from "../../utils/theme";

const ComboBox = ({ label, options, selection, setSelection }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <Picker
        style={styles.picker}
        selectedValue={selection}
        onValueChange={(itemValue, itemIndex) => setSelection(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    marginVertical: theme.DefaultTheme.space,
  },
  label: {
    padding: theme.DefaultTheme.spaceSmall,
  },
  picker: {
    padding: theme.DefaultTheme.space,
    borderRadius: theme.DefaultTheme.roundness,
    borderColor: theme.DefaultTheme.colors.white,
  },
});

export default ComboBox;