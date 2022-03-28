import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  TextInput,
  Button,
  HelperText,
  Card,
  Avatar,
} from "react-native-paper";

import theme from "../../utils/theme";
import localization from "../../utils/localization";
import providers from "../../providers";

/**
 * @memberof Screens
 * @name LoginScreen
 * @description It implemets the Login Screen page
 */
const LoginScreen = ({ navigation }) => {
  const { authError, login } = React.useContext(providers.auth.AuthContext);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const hasErrors = () => {
    return username.length > 0 && !username.includes("@");
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await login(username, password);
    setIsLoading(false);
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
            title={localization.t("screens.login.title")}
            titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
          />
          <Card.Content>
            <Avatar.Image
              source={require("../../../assets/logo.png")}
              style={styles.logo}
            />
            <HelperText type="error" visible={authError}>
              {authError}
            </HelperText>
            <TextInput
              placeholder={localization.t("screens.login.email_placeholder")}
              value={username}
              onChangeText={setUsername}
              left={<TextInput.Icon name="account" />}
              style={styles.cardInput}
            />
            <HelperText type="error" visible={hasErrors()}>
              {localization.t("screens.login.email_invalid_message")}
            </HelperText>
            <TextInput
              placeholder={localization.t("screens.login.password_placeholder")}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              left={<TextInput.Icon name="key-variant" />}
              style={styles.cardInput}
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={handleLogin}
              loading={isLoading}
            >
              {localization.t("screens.login.enter_button_label")}
            </Button>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={() => {
                navigation.navigate("user-type");
              }}
            >
              {localization.t("screens.login.signup_button_label")}
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

/**
 * @name styles
 * @description it implements the Login screen page' style grouped by component view
 */
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

export default LoginScreen;
