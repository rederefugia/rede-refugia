import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import UserTypeScreen from "./UserTypeScreen";
import AuthDataScreen from "./AuthDataScreen";
const Stack = createNativeStackNavigator();

/**
 * @memberof Screens
 * @name SingupScreen
 * @description It implemets the Singup Screen page
 */
const SingupScreen = ({ navigation }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="user-type" component={UserTypeScreen} />
      <Stack.Screen name="auth-data" component={AuthDataScreen} />
    </Stack.Navigator>
  );
};

export default SingupScreen;
