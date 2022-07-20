import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Text, TextInput, Button, HelperText, Card } from "react-native-paper";

import theme from "../../utils/theme";
import localization from "../../utils/localization";
import providers from "../../providers";

const LoginForm = React.forwardRef(({ navigation }, ref) => {
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
    >
      <View
        style={[styles.view, { marginVertical: theme.DefaultTheme.spaceLarge }]}
        ref={ref}
      >
        <Card>
          <Card.Title
            title={localization.t("screens.login.title")}
            subtitle={localization.t("screens.login.subtitle")}
            subtitleStyle={styles.title}
            titleStyle={styles.title}
          />
          <Card.Content style={styles.content}>
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
              style={[styles.button, { width: "100%" }]}
              uppercase={false}
              mode="contained"
              onPress={handleLogin}
              loading={isLoading}
            >
              {localization.t("screens.login.enter_button_label")}
            </Button>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.signupText}>
                {localization.t("screens.login.signup_question")}
              </Text>
              <Button
                mode="text"
                compact={true}
                uppercase={false}
                onPress={() => navigation.navigate("user-type")}
              >
                {localization.t("screens.login.signup_button_label")}
              </Button>
            </View>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
});

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  logo: {
    margin: "auto",
    marginVertical: theme.DefaultTheme.spaceSmall,
  },
  title: {
    ...theme.DefaultStyle.cardHeaderTitle,
    alignSelf: "center",
  },
  content: {
    marginVertical: theme.DefaultTheme.space,
  },
  cardActions: {
    ...theme.DefaultStyle.cardActions,
    flexDirection: "column",
    justifyContent: "center",
  },
  signupText: {
    paddingVertical: theme.DefaultTheme.spaceSmall,
    color: theme.DefaultTheme.colors.white,
  },
});

export default LoginForm;
