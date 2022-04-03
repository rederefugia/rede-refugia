import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, TextInput } from "react-native-paper";

import providers from "../providers";
import theme from "../utils/theme";

export const DrawerCustomContent = (props) => {
  const { logout } = React.useContext(providers.auth.AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-rede-refugia.png")}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        onPress={logout}
        icon={() => <TextInput.Icon name="logout" />}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  header: {
    ...theme.DefaultStyle.view,
    backgroundColor: theme.DefaultTheme.colors.light_pink,
    borderBottomRightRadius: "36px"
  },
  logo: {
    margin: theme.DefaultTheme.space,
    resizeMode: "center",
    width: "70%",
    height: "100px",
  },
});
