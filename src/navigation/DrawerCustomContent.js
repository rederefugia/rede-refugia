import * as React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import auth from "../auth";
import theme from "../utils/theme";

export const DrawerCustomContent = (props) => {
  const { logout } = React.useContext(auth.AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../assets/logo-rede-refugia.png")}
        />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          {...props}
          label="Logout"
          onPress={logout}
          style={theme.DefaultStyle.menuItem}
          activeTintColor={theme.DefaultTheme.colors.white}
          inactiveTintColor={theme.DefaultTheme.colors.white}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ...theme.DefaultStyle,
  header: {
    flex: 0.25,
    backgroundColor: theme.DefaultTheme.colors.gray,
    borderBottomRightRadius: theme.DefaultTheme.roundnessLarge,
  },
  logo: {
    marginVertical: theme.DefaultTheme.space,
    resizeMode: "contain",
    width: "70%",
    height: "70%",
  },
});
