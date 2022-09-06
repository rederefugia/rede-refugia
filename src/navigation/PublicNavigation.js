import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import auth from "../auth";
import landing from "../landing";

import theme from "../utils/theme";

const Stack = createNativeStackNavigator();

const PublicNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login"
        component={landing.HomeScreen}
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
        <Stack.Screen name="user-type" component={auth.signup.UserTypeScreen} />
        <Stack.Screen
          name="institution-identification"
          component={auth.signup.InstitutionIdentificationScreen}
        />
        <Stack.Screen name="auth-data" component={auth.signup.AuthDataScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default PublicNavigation;
