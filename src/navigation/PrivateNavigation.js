import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerCustomContent } from "./DrawerCustomContent";

import { settings } from "../settings";
import { profile } from "../profile";

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
      initialRouteName={localization.t("screens.opportunities.name")}
      drawerContent={(props) => <DrawerCustomContent {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? "permanent" : "front",
        headerTintColor: theme.DefaultTheme.colors.white,
        drawerActiveTintColor: theme.DefaultTheme.colors.white,
        drawerInactiveTintColor: theme.DefaultTheme.colors.white,
        drawerStyle: {
          backgroundColor: theme.DefaultTheme.colors.purple,
          borderRightWidth: theme.DefaultTheme.noSpace,
        },
        headerStyle: {
          backgroundColor: theme.DefaultTheme.colors.primary,
          borderBottomLeftRadius: theme.DefaultTheme.roundnessLarge,
          borderBottomColor: theme.DefaultTheme.colors.purpleDark,
        },
        headerTitleStyle: {
          color: theme.DefaultTheme.colors.white,
          fontSize: theme.DefaultTheme.fontSizeLarge,
          fontWeight: theme.DefaultTheme.fontWeightLarge,
          fontFamily: theme.DefaultTheme.fontFamily,
        },
        drawerItemStyle: {
          ...theme.DefaultStyle.menuItem,
        },
      }}
    >
      <Drawer.Screen
        name={localization.t("screens.opportunities.name")}
        component={screens.OpportunitiesScreen}
        options={{
          drawerLabel: localization.t("screens.opportunities.name"),
        }}
      />
      <Drawer.Screen
        name={localization.t("profile")}
        component={profile.ProfileScreen}
        options={{
          drawerLabel: localization.t("profile"),
        }}
      />
      <Drawer.Screen
        name={localization.t("settings")}
        component={settings.SettingsScreen}
        options={{
          drawerLabel: localization.t("settings"),
        }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
