import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, Paragraph } from "react-native-paper";

const InlineTextEdit = ({ fieldName, value, setValue }) => {
  return (
    <Paragraph style={styles.paragraph}>
      <Text style={styles.label}>{fieldName}:</Text>
      <Text>{value}</Text>
    </Paragraph>
  );
};

const styles = StyleSheet.create({
  paragraph: { paddingVertical: "16px" },
  label: { paddingRight: "16px", fontWeight: "bold" },
});

export default InlineTextEdit;
