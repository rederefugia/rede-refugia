import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "../screens";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={screens.LoginScreen} />
      <Stack.Screen name="signup" component={screens.SignupScreen} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
