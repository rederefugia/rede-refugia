import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { TextInput } from "react-native-paper";

import localization from "../utils/localization";
import screens from "../screens";
import { LogoutItem } from "./LogoutItem";

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
      drawerContent={(props) => <LogoutItem {...props} />}
      screenOptions={{
        drawerType: isLargeScreen ? "permanent" : "front",
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
