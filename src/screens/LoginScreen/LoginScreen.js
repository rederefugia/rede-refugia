import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput, Button, HelperText, Card } from "react-native-paper";

import providers from "../../providers";

/**
 * @memberof Screens
 * @name LoginScreen
 * @description It implemets the Login Screen page
 */
const LoginScreen = () => {
  const { login } = React.useContext(providers.auth.AuthContext);

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const hasErrors = () => {
    return username.length > 0 && !username.includes("@");
  };

  const handleLogin = () => {
      login(username, password);
  };

  return (
    <View style={styles.view}>
      <Card>
        <Card.Title title="Login" />
        <Card.Content>
          <TextInput
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
            left={<TextInput.Icon name="account" />}
          />
          <HelperText type="error" visible={hasErrors()}>
            Email address is invalid!
          </HelperText>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            left={<TextInput.Icon name="key-variant" />}
          />
        </Card.Content>
        <Card.Actions style={styles.actions}>
          <Button icon="login-variant" mode="contained" onPress={handleLogin} >
            Enter
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
  actions: { paddingHorizontal: "16px" },
});

export default LoginScreen;
