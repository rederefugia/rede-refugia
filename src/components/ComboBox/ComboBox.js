import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Picker } from "@react-native-picker/picker";

import theme from "../../utils/theme";

const ComboBox = ({ title }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState();

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
    >
      <Picker.Item label="Java" value="java" />
      <Picker.Item label="JavaScript" value="js" />
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
