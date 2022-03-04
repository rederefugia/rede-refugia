import * as React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TextInput } from "react-native-paper";

import providers from "../providers";

export const LogoutItem = (props) => {
  const { logout } = React.useContext(providers.auth.AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={logout}
        icon={() => <TextInput.Icon name="logout" />}
      />
    </DrawerContentScrollView>
  );
};
