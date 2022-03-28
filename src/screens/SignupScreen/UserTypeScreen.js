import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  Button,
  Card,
  Headline,
  Switch,
  Paragraph,
  Text,
  HelperText,
} from "react-native-paper";

import theme from "../../utils/theme";
import localization from "../../utils/localization";

/**
 * @memberof Screens
 * @name UserTypeScreen
 * @description It implemets the screen to define the user's type (ex: regular or ngo)
 */
const UserTypeScreen = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const next = () => {
    if (!isSwitchOn) navigation.navigate("auth-data");
    else navigation.navigate("institution-identification");
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/login-background.png")}
      style={{ flex: 1, backgroundColor: theme.DefaultTheme.colors.accent }}
    >
      <View style={styles.view}>
        <Card style={styles.cardView}>
          <Card.Title
            style={styles.cardHeader}
            title={localization.t("screens.user_type.question_text")}
            titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
          />
          <Card.Content>
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
        </Card>
        <View>
          <Button
            color="red"
            icon="cancel"
            onPress={() => navigation.navigate("login")}
          >
            {localization.t("screens.user_type.cancel_button_label")}
          </Button>
          <Button icon="arrow-right" onPress={next}>
            {localization.t("screens.user_type.next_button_label")}
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  view: {
    ...theme.DefaultStyle.view,
  },
  logo: {
    margin: "auto",
    marginVertical: theme.DefaultTheme.spaceSmall,
  },
});

export default UserTypeScreen;
