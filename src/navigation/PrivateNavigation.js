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
        drawerStyle: {
          backgroundColor: theme.DefaultTheme.colors.purple,
          borderRightWidth: theme.DefaultTheme.noSpace
        },
        headerStyle: {
          backgroundColor: theme.DefaultTheme.colors.light_pink,
          borderBottomLeftRadius: theme.DefaultTheme.roundnessLarge,
          borderBottomColor: theme.DefaultTheme.colors.light_pink,
        }
      }}
    >
      <Drawer.Screen
        name={localization.t("home")}
        component={screens.HomeScreen}
        options={{
          drawerLabel: localization.t("home"),
          drawerIcon: (config) => <TextInput.Icon name="home" size={18} />,
        }}
      />
      <Drawer.Screen
        name={localization.t("profile")}
        component={screens.ProfileScreen}
        options={{
          drawerLabel: localization.t("profile"),
          drawerIcon: (config) => <TextInput.Icon name="account" />,
        }}
      />
      <Drawer.Screen
        name={localization.t("settings")}
        component={screens.SettingsScreen}
        options={{
          drawerLabel: localization.t("settings"),
          drawerIcon: (config) => <TextInput.Icon name="cog" />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
