import * as React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { TextInput, Button, HelperText, Card } from "react-native-paper";

import { AuthContext } from "../AuthProvider";

import theme from "../../utils/theme";
import localization from "../../utils/localization";

const AuthDataScreen = ({ navigation }) => {
  const { authError, signup } = React.useContext(AuthContext);

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
    if (authError?.length > 0) setIsLoading(false);
  };

  return (
    <ImageBackground
      resizeMode="cover"
      source={require("../../../assets/login-background.png")}
      style={{ flex: 1, backgroundColor: theme.DefaultTheme.colors.grayE5E5E5 }}
    >
      <View style={styles.view}>
        <Card style={styles.cardView}>
          <Card.Title
            style={styles.cardHeader}
            title={localization.t("screens.auth_data.headline")}
            titleStyle={{ ...theme.DefaultStyle.cardHeaderTitle }}
          />
          <Card.Content style={{ paddingTop: theme.DefaultTheme.spaceSmall }}>
            <HelperText type="error" visible={authError}>
              {authError}
            </HelperText>
            <TextInput
              placeholder={localization.t("screens.auth_data.name_placeholder")}
              value={userData.name}
              onChangeText={(data) => handleInputTextChange("name", data)}
              style={styles.cardInput}
              left={<TextInput.Icon disabled name="account" />}
            />
            <br />
            <TextInput
              placeholder={localization.t(
                "screens.auth_data.email_placeholder"
              )}
              value={userData.email}
              onChangeText={(data) => handleInputTextChange("email", data)}
              style={styles.cardInput}
              left={<TextInput.Icon disabled name="email" />}
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
              style={styles.cardInput}
              left={<TextInput.Icon disabled name="key-variant" />}
            />
          </Card.Content>
          <Card.Actions style={styles.cardActions}>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={() => navigation.navigate("login")}
            >
              {localization.t("screens.auth_data.cancel_button_label")}
            </Button>
            <Button
              style={styles.cardActionsButton}
              uppercase={false}
              mode="contained"
              onPress={handleSignup}
              loading={isLoading}
            >
              {localization.t("screens.auth_data.enter_button_label")}
            </Button>
          </Card.Actions>
        </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  logo: {
    margin: "auto",
    marginVertical: theme.DefaultTheme.spaceSmall,
  },
});

export default AuthDataScreen;
