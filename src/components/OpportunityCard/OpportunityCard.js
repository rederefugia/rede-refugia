import * as React from "react";
import { StyleSheet, View } from "react-native";

import { Text, Paragraph } from "react-native-paper";

import ButtonLink from "../ButtonLink";
import FavoriteButton from "../FavoriteButton";
import DeleteButton from "../DeleteButton";

import auth from "../../auth";
import theme from "../../utils/theme";
import masks from "../../utils/masks";
import address from "../../utils/address";

const OpportunityCard = ({ opportunity, updateScreen }) => {
  const { user, setUser } = React.useContext(auth.AuthContext);
  const [distance, setDistance] = React.useState("");

  const bgColor =
    opportunity.type == "request"
      ? theme.DefaultTheme.colors.gray
      : theme.DefaultTheme.colors.grayF3F0F3;

  React.useEffect(() => {
    const origin = {
      lat: opportunity.address.lat,
      lng: opportunity.address.lng,
    };
    const destination = opportunity.owner.zipCode;
    address
      .getDistance(origin, destination)
      .then((data) => setDistance(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <View style={styles.cardMain}>
        <View style={styles.row}>
          <Text style={styles.title}>{opportunity.title}</Text>
          {opportunity.owner.uid == user.uid ? (
            <DeleteButton id={opportunity.id} updateScreen={updateScreen} />
          ) : (
            <FavoriteButton id={opportunity.id} />
          )}
        </View>
        <Paragraph>{opportunity.description}</Paragraph>
      </View>
      <View style={styles.cardInfo}>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.owner.name}</Text>
          <ButtonLink
            address={opportunity.link}
            labelStyle={styles.link}
            buttonStyle={styles.buttonLink}
          >
            {opportunity.link}
          </ButtonLink>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{opportunity.address.city}</Text>
          <Text style={styles.text}>{distance}</Text>
        </View>
        <View style={styles.row}>
          <ButtonLink
            address={opportunity.owner.email}
            buttonStyle={styles.buttonLink}
            labelStyle={styles.link}
            type={ButtonLink.EMAIL_TYPE}
          >
            {opportunity.owner.email}
          </ButtonLink>
          <ButtonLink
            address={opportunity.owner.phoneNumber}
            buttonStyle={styles.buttonLink}
            labelStyle={styles.link}
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
  buttonLink: {
    maxWidth: "45%",
  },
});

export default OpportunityCard;
