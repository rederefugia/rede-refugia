import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, HelperText, Card } from "react-native-paper";

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
    <View style={styles.view}>
      <Card style={styles.card}>
        <Card.Title title={localization.t("screens.login.title")} />
        <Card.Content>
          <HelperText type="error" visible={authError}>
            {authError}
          </HelperText>
          <TextInput
            placeholder={localization.t("screens.login.email_placeholder")}
            value={username}
            onChangeText={setUsername}
            left={<TextInput.Icon name="account" />}
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
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button
            icon="login-variant"
            mode="contained"
            onPress={handleLogin}
            loading={isLoading}
          >
            {localization.t("screens.login.enter_button_label")}
          </Button>
          <Button
            style={styles.button_signup}
            icon={"arrow-right"}
            onPress={() => {
              navigation.navigate("user-type");
            }}
          >
            {localization.t("screens.login.signup_button_label")}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the Login screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: { width: "30%" },
  actions: { paddingHorizontal: "16px", justifyContent: "space-between" },
});

export default LoginScreen;
