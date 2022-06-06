import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Paragraph } from "react-native-paper";

import theme from "../../utils/theme";
import masks from "../../utils/masks";

const OpportunityCard = ({ opportunity }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardMain}>
        <Text style={styles.title}>{opportunity.title}</Text>
        <Paragraph>{opportunity.description}</Paragraph>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.name}</Text>
          <Text style={styles.text}>{opportunity.link}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.city}</Text>
          <Text style={styles.text}>15km</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.email}</Text>
          <Text style={styles.text}>{masks.parsePhoneNumber(opportunity.phoneNumber)}</Text>
        </View>
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
  cardMain: {
    paddingBottom: theme.DefaultTheme.space,
    borderBottomColor: "#c4c3c3",
    borderBottomWidth: "1px",
  },
  cardInfo: {
    paddingVertical: theme.DefaultTheme.space,
  },
  title: {
    color: theme.DefaultTheme.colors.purple,
    fontSize: "18px",
    marginBottom: theme.DefaultTheme.space,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: theme.DefaultTheme.spaceSmall,
  },
  text: {
    color: theme.DefaultTheme.colors.black,
    opacity: "56%",
    fontSize: theme.DefaultTheme.fontSizeSmall,
  }
});

export default OpportunityCard;
