import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Paragraph } from "react-native-paper";

import ButtonLink from "../ButtonLink";

import theme from "../../utils/theme";
import masks from "../../utils/masks";
import addressUtils from "../../utils/address";

const OpportunityCard = ({ opportunity }) => {
  const [address, setAddress] = React.useState({});
  React.useEffect(() => {
  }, []);

  return (
    <View style={styles.card}>
      <View style={styles.cardMain}>
        <Text style={styles.title}>{opportunity.title}</Text>
        <Paragraph>{opportunity.description}</Paragraph>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.owner.name}</Text>
          <ButtonLink address={opportunity.link} style={styles.link}>
            {opportunity.link}
          </ButtonLink>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.address.city}</Text>
          <Text style={styles.text}>15km</Text>
        </View>
        <View style={styles.row}>
          <ButtonLink
            address={opportunity.owner.email}
            style={styles.link}
            type={ButtonLink.EMAIL_TYPE}
          >
            {opportunity.owner.email}
          </ButtonLink>
          <ButtonLink
            address={opportunity.owner.phoneNumber}
            style={styles.link}
            type={ButtonLink.PHONE_TYPE}
          >
            {masks.parsePhoneNumber(opportunity.owner.phoneNumber)}
          </ButtonLink>
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
  },
  link: {
    color: theme.DefaultTheme.colors.black,
    opacity: "56%",
    fontSize: theme.DefaultTheme.fontSizeSmall,
    marginHorizontal: theme.DefaultTheme.noSpace,
    marginVertical: theme.DefaultTheme.noSpace,
  },
});

export default OpportunityCard;
