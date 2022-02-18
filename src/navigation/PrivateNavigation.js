import { createDrawerNavigator } from "@react-navigation/drawer";

import screens from "../screens";

const Drawer = createDrawerNavigator();

/**
 * Application navigation system
 */
const PrivateNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
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
