import * as React from "react";
import { StyleSheet } from "react-native";

import theme from "../../utils/theme";
import components from "../../components";

const LoginScreen = ({ navigation }) => {
  return <components.LoginForm navigation={navigation} />;
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
});

export default LoginScreen;
