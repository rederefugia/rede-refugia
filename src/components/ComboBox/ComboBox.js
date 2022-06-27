import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

import theme from "../../utils/theme";

const ComboBox = ({ label, options, selection, setSelection }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Picker
        style={styles.picker}
        selectedValue={selection}
        onValueChange={(itemValue, itemIndex) => setSelection(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
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
