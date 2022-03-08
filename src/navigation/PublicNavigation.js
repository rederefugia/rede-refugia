import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "../screens";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={screens.LoginScreen}
      />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
