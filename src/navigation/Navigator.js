import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator } from "react-native-paper";

import auth from "../auth";
import PublicNavigation from "./PublicNavigation";
import PrivateNavigation from "./PrivateNavigation";

const Navigator = ({ theme }) => {
  const { authenticated, loadingAuthState } = React.useContext(
    auth.AuthContext
  );

  if (loadingAuthState) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
        animating={true}
      />
    );
  }

  return (
    <NavigationContainer theme={theme} linking={true}>
      {!authenticated ? <PublicNavigation /> : <PrivateNavigation />}
    </NavigationContainer>
  );
};

export default Navigator;
