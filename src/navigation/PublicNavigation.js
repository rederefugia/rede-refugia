import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "../screens";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={screens.LoginScreen} />
      <Stack.Group key="signup">
        <Stack.Screen
          name="user-type"
          component={screens.signup.UserTypeScreen}
        />
        <Stack.Screen
          name="institution-identification"
          component={screens.signup.InstitutionIdentificationScreen}
        />
        <Stack.Screen
          name="auth-data"
          component={screens.signup.AuthDataScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PublicNavigation;
