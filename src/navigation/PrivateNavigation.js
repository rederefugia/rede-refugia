import { useWindowDimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
        drawerType: isLargeScreen ? "permanent" : "front"
      }}
    >
      <Drawer.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Profile"
        component={screens.ProfileScreen}
        options={{ drawerLabel: "Profile" }}
      />
    </Drawer.Navigator>
  );
};

export default PrivateNavigation;
