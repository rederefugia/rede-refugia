import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { FontAwesome } from "@expo/vector-icons";

import localization from "../utils/localization";
import screens from "../screens";

const Drawer = createDrawerNavigator();

/**
 * Application navigation system
 */
const PrivateNavigation = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName={localization.t('home')}
      screenOptions={{
        drawerType: isLargeScreen ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name={localization.t('home')}
        component={screens.HomeScreen}
        options={{
          drawerLabel: localization.t('home'),
          drawerIcon: (config) => <FontAwesome name="home" size={18} />,
        }}
      />
      <Drawer.Screen
        name={localization.t('profile')}
        component={screens.ProfileScreen}
        options={{
          drawerLabel: localization.t('profile'),
          drawerIcon: (config) => <FontAwesome name="user" size={18} />,
        }}
      />
      <Drawer.Screen
        name={localization.t('settings')}
        component={screens.SettingsScreen}
        options={{
          drawerLabel: localization.t('settings'),
          drawerIcon: (config) => <FontAwesome name="cogs" size={18} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
