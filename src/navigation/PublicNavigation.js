import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import screens from "../screens";

import theme from "../utils/theme";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        component={screens.LoginScreen}
        options={{
          headerShown: true,
          title: "",
          headerTintColor: theme.DefaultTheme.colors.white,
          headerStyle: {
            backgroundColor: theme.DefaultTheme.colors.primary,
            borderBottomColor: theme.DefaultTheme.colors.purpleDark,
          },
        }}
      />
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
