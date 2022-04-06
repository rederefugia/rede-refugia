import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TextInput } from "react-native-paper";

import { DrawerCustomContent } from "./DrawerCustomContent";

import screens from "../screens";
import theme from "../utils/theme";
import localization from "../utils/localization";

const Drawer = createDrawerNavigator();

/**
 * Application navigation system
 */
const PrivateNavigation = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName={localization.t("home")}
      drawerContent={(props) => <DrawerCustomContent {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? "permanent" : "front",
        drawerActiveTintColor: theme.DefaultTheme.colors.white,
        drawerInactiveTintColor: theme.DefaultTheme.colors.white,
        drawerStyle: {
          backgroundColor: theme.DefaultTheme.colors.purple,
          borderRightWidth: theme.DefaultTheme.noSpace,
        },
        headerStyle: {
          backgroundColor: theme.DefaultTheme.colors.light_pink,
          borderBottomLeftRadius: theme.DefaultTheme.roundnessLarge,
          borderBottomColor: theme.DefaultTheme.colors.light_pink,
        },
        headerTitleStyle: {
          color: theme.DefaultTheme.colors.purpleDark,
          fontSize: theme.DefaultTheme.fontSizeLarge,
          fontWeight: theme.DefaultTheme.fontWeightLarge,
          fontFamily: theme.DefaultTheme.fontFamily
          
        },
        drawerItemStyle: {
          ...theme.DefaultStyle.menuItem
        },
      }}
    >
      <Drawer.Screen
        name={localization.t("home")}
        component={screens.HomeScreen}
        options={{
          drawerLabel: localization.t("home"),
        }}
      />
      <Drawer.Screen
        name={localization.t("profile")}
        component={screens.ProfileScreen}
        options={{
          drawerLabel: localization.t("profile"),
        }}
      />
      <Drawer.Screen
        name={localization.t("settings")}
        component={screens.SettingsScreen}
        options={{
          drawerLabel: localization.t("settings"),
        }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
