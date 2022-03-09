import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Headline,
  TextInput,
  Button,
  HelperText,
  Card,
} from "react-native-paper";

import localization from "../../utils/localization";
import providers from "../../providers";

/**
 * @memberof Screens
 * @name AuthDataScreen
 * @description It implemets the AuthData Screen page
 */
const AuthDataScreen = ({ navigation }) => {
  const { authError, signup } = React.useContext(
    providers.auth.AuthContext
  );

  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
  });
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const hasErrors = () => {
    return userData.email.length > 0 && !userData.email.includes("@");
  };

  const handleInputTextChange = (paramName, paramValue) => {
    setUserData((data) => ({ ...data, [paramName]: paramValue }));
  };

  const handleSignup = async () => {
    setIsLoading(true);
    await signup(userData, password);
    setIsLoading(false);
  };

  return (
    <View style={styles.view}>
      <Card style={styles.card}>
        <Card.Title title={localization.t("screens.auth_data.title")} />
        <Card.Content>
          <Headline>{localization.t("screens.auth_data.headline")}</Headline>
          <HelperText type="error" visible={authError}>
            {authError}
          </HelperText>
          <TextInput
            placeholder={localization.t("screens.auth_data.name_placeholder")}
            value={userData.name}
            onChangeText={(data) => handleInputTextChange("name", data)}
            left={<TextInput.Icon name="account" />}
          />
          <br />
          <TextInput
            placeholder={localization.t("screens.auth_data.email_placeholder")}
            value={userData.email}
            onChangeText={(data) => handleInputTextChange("email", data)}
            left={<TextInput.Icon name="email" />}
          />
          <HelperText type="error" visible={hasErrors()}>
            {localization.t("screens.auth_data.email_invalid_message")}
          </HelperText>
          <TextInput
            placeholder={localization.t(
              "screens.auth_data.password_placeholder"
            )}
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
            onPress={handleSignup}
            loading={isLoading}
          >
            {localization.t("screens.auth_data.enter_button_label")}
          </Button>
          <Button
            icon="cancel"
            color="red"
            onPress={() => navigation.navigate("login")}
          >
            {localization.t("screens.auth_data.cancel_button_label")}
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

/**
 * @name styles
 * @description it implements the AuthData screen page' style grouped by component view
 */
const styles = StyleSheet.create({
  view: { flex: 1, alignItems: "center", justifyContent: "center" },
  card: { minWidth: "30%" },
  actions: { paddingHorizontal: "16px", justifyContent: "space-between" },
});

export default AuthDataScreen;
