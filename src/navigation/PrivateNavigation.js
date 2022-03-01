import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

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
      initialRouteName="Home"
      screenOptions={{
        drawerType: isLargeScreen ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{
          drawerLabel: "Home",
          drawerIcon: (config) => <FontAwesome name="home" size={18} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={screens.ProfileScreen}
        options={{
          drawerLabel: "Profile",
          drawerIcon: (config) => <FontAwesome name="user" size={18} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={screens.SettingsScreen}
        options={{
          drawerLabel: "Settings",
          drawerIcon: (config) => <FontAwesome name="cogs" size={18} />,
        }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
