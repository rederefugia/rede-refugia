import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Paragraph } from "react-native-paper";

import theme from "../../utils/theme";

const OpportunityCard = ({ opportunity }) => {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{opportunity.title}</Text>
        <Paragraph>{opportunity.description}</Paragraph>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.DefaultTheme.space,
    borderRadius: theme.DefaultTheme.roundness,
    backgroundColor: theme.DefaultTheme.colors.gray,
  },
  title: {
    color: theme.DefaultTheme.colors.purple,
    fontSize: "18px",
    marginBottom: theme.DefaultTheme.space
  },
});

export default OpportunityCard;
