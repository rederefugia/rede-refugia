import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Headline,
  Switch,
  Paragraph,
  Text,
  HelperText,
} from "react-native-paper";

import localization from "../../utils/localization";

/**
 * @memberof Screens
 * @name UserTypeScreen
 * @description It implemets the screen to define the user's type (ex: regular or ngo)
 */
const UserTypeScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Card.Title title={localization.t("screens.user_type.title")} />
        <Card.Content>
          <Headline>
            {localization.t("screens.user_type.question_text")}
          </Headline>
          <Paragraph style={styles.paragraph}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
            <Text style={styles.switch_label}>
              {localization.t("screens.user_type.switch_text")}
            </Text>
          </Paragraph>
          <Paragraph>
            <HelperText visible={isSwitchOn} type="info">
              {localization.t("screens.user_type.info_message")}
            </HelperText>
          </Paragraph>
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            color="red"
            icon="cancel"
            onPress={() => navigation.navigate("login")}
          >
            {localization.t("screens.user_type.cancel_button_label")}
          </Button>
          <Button icon="arrow-right">
            {localization.t("screens.user_type.next_button_label")}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: { minWidth: "30%" },
  paragraph: { paddingVertical: "16px" },
  switch_label: { marginHorizontal: "16px" },
  actions: { paddingHorizontal: "16px", justifyContent: "space-between" },
});

export default UserTypeScreen;
